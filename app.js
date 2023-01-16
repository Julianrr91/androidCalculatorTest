var calculatorIntent = new Intent(Intent.ACTION_MAIN);
calculatorIntent.setComponent(new ComponentName("com.android.calculator2","com.android.calculator2.Calculator"));
startActivity(calculatorIntent);

// test to add 2 numbers
function addTwoNumbers(num1, num2) {
  let expectedResult = num1 + num2;
  let actualResult = document.querySelector('#calculator-result').textContent;
  if (expectedResult == actualResult) {
    console.log('Test passed');
  } else {
    console.log('Test failed');
  }
}