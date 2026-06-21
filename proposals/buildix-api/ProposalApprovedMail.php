<?php

namespace App\Mail;

use App\Models\ProposalApproval;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ProposalApprovedMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public ProposalApproval $approval)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'אישור הצעה: ' . $this->approval->business_name . ' — ' . $this->approval->signer_name,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.proposal-approved',
        );
    }
}
