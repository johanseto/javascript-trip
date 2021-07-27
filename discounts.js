function calcPriceWithDiscount(price,discount){

    const percentagePriceWithDiscount= 100-discount;
    const priceWithDiscount=(price*percentagePriceWithDiscount)/100;
    return priceWithDiscount
}
 

function onClickButtonPriceDiscount(){
    
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    priceWithDiscount = calcPriceWithDiscount(priceValue,discountValue);

    const resultPrice = document.getElementById("resultPrice")
    
    resultPrice.innerText = "The price with discount is $"+priceWithDiscount
}



const coupons = [
    {
        name: "first",
        discount: 15,
    },
    {
        name: "second",
        discount: 30,
    },
    {
        name: "third",
        discount: 25,
    },
];







function onClickCouponDiscount(){
const inputCoupon = document.getElementById("inputCoupon");
const couponValue = inputCoupon.value;
const inputPrice = document.getElementById("inputPrice");
const priceValue = inputPrice.value;

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};


const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
}else {
    console.log(userCoupon)
    const discount = userCoupon.discount;
    const priceWithdiscount = calcPriceWithDiscount(priceValue, discount);

    const resultCoupon = document.getElementById("resultCoupon");
    resultCoupon.innerText = "The price with coupon discount is $" + priceWithdiscount;
}
}