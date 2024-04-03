

let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer P5bzE1Solu4jbhuloARjrccy2N6b");
​
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNDAzMTE0MjIz",
    "Timestamp": "20240403114223",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254796825502,
    "PartyB": 174379,
    "PhoneNumber": 254796825502,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));