<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ProposalApprovedMail;
use App\Models\ProposalApproval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ProposalApprovalController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'proposalId' => 'required|string|max:120',
            'businessName' => 'required|string|max:255',
            'signerName' => 'required|string|max:255',
            'phone' => 'required|string|max:40',
            'email' => 'nullable|email|max:255',
            'notes' => 'nullable|string|max:5000',
            'approved' => 'required|boolean',
            'signedAt' => 'nullable|string|max:80',
            'signatureDataUrl' => 'required|string',
            'shareUrl' => 'nullable|string|max:2000',
            'proposalPdfDataUrl' => 'nullable|string|max:8000000',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'validation_failed', 'messages' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (!$data['approved']) {
            return response()->json(['error' => 'not_approved'], 422);
        }

        $signature = (string) $data['signatureDataUrl'];
        if (!str_starts_with($signature, 'data:image/') || strlen($signature) < 120) {
            return response()->json(['error' => 'invalid_signature'], 422);
        }

        $approval = ProposalApproval::create([
            'proposal_id' => $data['proposalId'],
            'business_name' => $data['businessName'],
            'signer_name' => $data['signerName'],
            'phone' => $data['phone'],
            'email' => $data['email'] ?? null,
            'notes' => $data['notes'] ?? null,
            'approved' => true,
            'signed_at' => $data['signedAt'] ?? null,
            'signature_data_url' => $signature,
            'share_url' => $data['shareUrl'] ?? null,
            'status' => 'approved',
            'ip_address' => $request->ip(),
            'user_agent' => (string) $request->userAgent(),
        ]);

        Mail::to(config('mail.proposal_notify', 'itay@itaysolutions.com'))
            ->send(new ProposalApprovedMail($approval));

        return response()->json(['ok' => true, 'id' => $approval->id]);
    }
}
