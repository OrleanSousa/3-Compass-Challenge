



<div className="w-full max-w-[608px] h-[789px] flex items-center justify-center">
<div className="w-full max-w-[533px] h-auto flex flex-col justify-between p-[16px]">
  {/* Resumo */}
  <div className="w-full max-w-[608px] h-[789px]  flex items-center justify-center">
<div className="w-full max-w-[533px] h-auto flex flex-col justify-between p-[16px]">
<div>
<div className="flex w-full justify-between">
<p className="font-medium text-2xl">Product</p>
<p className="font-medium text-2xl">Subtotal</p>
</div>
{cartItems.map((item) => (
<div key={item.id} className="flex w-full justify-between mt-[14px]">
<p className="font-light">{item.productName} x {item.quantity}</p>
<p className="font-light">Rs. {(item.price * item.quantity).toLocaleString()}</p>
</div>
))}
<div className="flex w-full justify-between mt-[22px]">
<p>Subtotal</p>
<p className="font-light">Rs. {subtotal.toLocaleString()}</p>
</div>
<div className="flex w-full justify-between mt-[22px]">
<p>Total</p>
<p className="text-2xl font-bold text-textOrange">Rs. {subtotal.toLocaleString()}</p>
</div>
<div className="border border-b-gray50 mt-[33.5px] w-full mx-auto"></div>
</div>

<div className="w-full flex flex-col space-y-[22px] mt-[22px]">
<div className="flex items-center gap-[15px]">
<label className="inline-flex items-center cursor-pointer">
<input type="checkbox" className="opacity-0 peer" />
<span className="w-[14px] h-[14px] border border-black rounded-full peer-checked:bg-black -ml-[12px]"></span>
</label>
<p>Direct Bank Transfer</p>
</div>
<p className="font-light text-gray50">Make your payment directly into our bank account. 
Please use your Order ID as the payment reference. 
Your order will not be shipped until the funds have cleared in our account.</p>

<div className="flex items-center gap-[15px]">
<label className="inline-flex items-center cursor-pointer">
<input type="checkbox" className="opacity-0 peer" />
<span className="w-[14px] h-[14px] border border-black rounded-full peer-checked:bg-black -ml-[12px]"></span>
</label>
<p>Direct Bank Transfer</p>
</div>

<div className="flex items-center gap-[15px]">
<label className="inline-flex items-center cursor-pointer">
<input type="checkbox" className="opacity-0 peer" />
<span className="w-[14px] h-[14px] border border-black rounded-full peer-checked:bg-black -ml-[12px]"></span>
</label>
<p>Cash On Delivery</p>
</div>
<p className="font-light text-gray50">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
</div>

<div className="flex justify-center mt-[22px]">
<button className="w-[318px] h-[64px] text-[20px] rounded-[15px] border border-black mt-[17px] cursor-pointer">Place order</button>
</div>
</div>
</div>
</div>
</div>