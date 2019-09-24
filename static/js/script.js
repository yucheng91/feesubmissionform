function calculateGST() {
    var feeStr =document.form.fee.value;
    if (!feeStr)
        feeStr = '0';
    var fee = parseFloat(feeStr);
    
    var country = document.getElementById("country").value;
    console.log(country);
    
    // ID for Singapore is 104, using ID value from currency table to link to transaction table.
    if (country != 104){
        var gstamt = 0;
    } else {
        gstamt = 0.07;
    }
    
    var gst = fee * gstamt ;
    var totalfee = fee + (fee * gstamt);
    
    document.form.gst.value = gst.toFixed(2);
    document.form.totalfee.value = totalfee.toFixed(2);
}
