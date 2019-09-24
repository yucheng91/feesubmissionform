function calculateGST() {
    var feeStr =document.form.fee.value;
    if (!feeStr)
        feeStr = '0';
    var fee = parseFloat(feeStr);
    
    var country = document.getElementById("country").value;
    if (country != "Singapore"){
        var gstamt = 0;
    } else {
        gstamt = 0.07;
    }
    document.form.gst.value = (fee * gstamt).toFixed(2);
    document.form.totalfee.value = (fee + (fee * gstamt);
}