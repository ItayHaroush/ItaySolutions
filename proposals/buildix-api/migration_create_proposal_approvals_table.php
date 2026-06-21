<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('proposal_approvals', function (Blueprint $table) {
            $table->id();
            $table->string('proposal_id', 120)->index();
            $table->string('business_name', 255);
            $table->string('signer_name', 255);
            $table->string('phone', 40);
            $table->string('email', 255)->nullable();
            $table->text('notes')->nullable();
            $table->boolean('approved')->default(true);
            $table->string('signed_at', 80)->nullable();
            $table->longText('signature_data_url')->nullable();
            $table->text('share_url')->nullable();
            $table->string('status', 40)->default('approved')->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('proposal_approvals');
    }
};
