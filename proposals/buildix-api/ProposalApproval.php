<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProposalApproval extends Model
{
    protected $fillable = [
        'proposal_id',
        'business_name',
        'signer_name',
        'phone',
        'email',
        'notes',
        'approved',
        'signed_at',
        'signature_data_url',
        'share_url',
        'status',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'approved' => 'boolean',
    ];
}
