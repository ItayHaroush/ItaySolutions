<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="utf-8">
    <title>אישור הצעה</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #182230;">
    <h2>הצעה חדשה אושרה ונחתמה</h2>
    <p><strong>הצעה:</strong> {{ $approval->proposal_id }}</p>
    <p><strong>עסק:</strong> {{ $approval->business_name }}</p>
    <p><strong>חותם:</strong> {{ $approval->signer_name }}</p>
    <p><strong>טלפון:</strong> {{ $approval->phone }}</p>
    @if($approval->email)
        <p><strong>אימייל:</strong> {{ $approval->email }}</p>
    @endif
    @if($approval->signed_at)
        <p><strong>תאריך חתימה:</strong> {{ $approval->signed_at }}</p>
    @endif
    @if($approval->notes)
        <p><strong>הערות:</strong> {{ $approval->notes }}</p>
    @endif
    @if($approval->share_url)
        <p><strong>קישור:</strong> {{ $approval->share_url }}</p>
    @endif
    @if($approval->signature_data_url)
        <p><strong>חתימה:</strong></p>
        <p><img src="{{ $approval->signature_data_url }}" alt="חתימת לקוח" style="max-width:280px;max-height:120px;border:1px solid #ddd;border-radius:8px;"></p>
    @endif
    <p style="color:#6b7280;font-size:12px;">נשלח אוטומטית מ-Buildix · Itay Solutions</p>
</body>
</html>
