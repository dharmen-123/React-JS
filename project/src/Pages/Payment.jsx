import {useState } from 'react';
import Button from 'react-bootstrap/Button';


        const banks = [
            { id: 1, name: "HDFC Bank", code: "HDFC", icon: "https://logo.clearbit.com/hdfcbank.com" },
            { id: 2, name: "ICICI Bank", code: "ICICI", icon: "https://logo.clearbit.com/icicibank.com" },
            { id: 3, name: "State Bank of India", code: "SBI", icon: "https://logo.clearbit.com/sbi.co.in" },
            { id: 4, name: "Axis Bank", code: "AXIS", icon: "https://logo.clearbit.com/axisbank.com" },
            { id: 5, name: "Kotak Mahindra", code: "KKBK", icon: "https://logo.clearbit.com/kotak.com" },
            { id: 6, name: "Punjab National Bank", code: "PNB", icon: "https://logo.clearbit.com/pnbindia.in" },
            { id: 7, name: "Bank of Baroda", code: "BOB", icon: "https://logo.clearbit.com/bankofbaroda.in" },
            { id: 8, name: "Canara Bank", code: "CNRB", icon: "https://logo.clearbit.com/canarabank.com" }
        ];

        const wallets = [
            { id: 1, name: "Paytm", icon: "https://logo.clearbit.com/paytm.com" },
            { id: 2, name: "PhonePe", icon: "https://logo.clearbit.com/phonepe.com" },
            { id: 3, name: "Amazon Pay", icon: "https://logo.clearbit.com/amazonpay.in" },
            { id: 4, name: "Mobikwik", icon: "https://logo.clearbit.com/mobikwik.com" }
        ];

const PaymentGateway = () => {
            const [activeMethod, setActiveMethod] = useState('card');
            const [cardDetails, setCardDetails] = useState({
                number: '',
                name: '',
                expiry: '',
                cvv: ''
            });
            const [selectedBank, setSelectedBank] = useState(null);
            const [upiId, setUpiId] = useState('');
            const [selectedWallet, setSelectedWallet] = useState(null);
            const [amount, setAmount] = useState(1000);
            const [isProcessing, setIsProcessing] = useState(false);
            const [paymentSuccess, setPaymentSuccess] = useState(false);
            const [errors, setErrors] = useState({});

            const validateCard = () => {
                const newErrors = {};
                if (!cardDetails.number || cardDetails.number.replace(/\s/g, '').length !== 16) {
                    newErrors.number = 'Please enter a valid 16-digit card number';
                }
                if (!cardDetails.name) {
                    newErrors.name = 'Cardholder name is required';
                }
                if (!cardDetails.expiry || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardDetails.expiry)) {
                    newErrors.expiry = 'Please enter a valid expiry date (MM/YY)';
                }
                if (!cardDetails.cvv || cardDetails.cvv.length !== 3) {
                    newErrors.cvv = 'Please enter a valid 3-digit CVV';
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            };

            const validateUpi = () => {
                if (!upiId || !upiId.includes('@')) {
                    setErrors({ upi: 'Please enter a valid UPI ID' });
                    return false;
                }
                return true;
            };

            const validateNetBanking = () => {
                if (!selectedBank) {
                    setErrors({ bank: 'Please select a bank' });
                    return false;
                }
                return true;
            };

            const validateWallet = () => {
                if (!selectedWallet) {
                    setErrors({ wallet: 'Please select a wallet' });
                    return false;
                }
                return true;
            };

            const formatCardNumber = (value) => {
                const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                const matches = v.match(/\d{4,16}/g);
                const match = matches && matches[0] || '';
                const parts = [];
                for (let i = 0, len = match.length; i < len; i += 4) {
                    parts.push(match.substring(i, i + 4));
                }
                return parts.length ? parts.join(' ') : '';
            };

            const handleCardNumberChange = (e) => {
                const formattedValue = formatCardNumber(e.target.value);
                setCardDetails({
                    ...cardDetails,
                    number: formattedValue
                });
            };

            const handleExpiryChange = (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                setCardDetails({
                    ...cardDetails,
                    expiry: value
                });
            };

            const handlePay = () => {
                let isValid = false;
                
                switch (activeMethod) {
                    case 'card':
                        isValid = validateCard();
                        break;
                    case 'upi':
                        isValid = validateUpi();
                        break;
                    case 'netbanking':
                        isValid = validateNetBanking();
                        break;
                    case 'wallet':
                        isValid = validateWallet();
                        break;
                    default:
                        break;
                }

                if (isValid) {
                    setIsProcessing(true);
                    // Simulate API call
                    setTimeout(() => {
                        setIsProcessing(false);
                        setPaymentSuccess(true);
                    }, 2000);
                }
            };

            const resetPayment = () => {
                setPaymentSuccess(false);
                setActiveMethod('card');
                setCardDetails({
                    number: '',
                    name: '',
                    expiry: '',
                    cvv: ''
                });
                setSelectedBank(null);
                setUpiId('');
                setSelectedWallet(null);
                setErrors({});
            };

            return (
                <>
                <br /><br /><br /><br />
                <div className="payform">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">Secure Payment Gateway</h1>
                            <p className="mt-2 text-gray-600">Complete your purchase with a secure payment</p>
                        </div>

                        {paymentSuccess ? (
                            <div className="bg-white rounded-lg shadow-md p-8 text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-check text-3xl text-green-600"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
                                <p className="text-gray-600 mb-6">Your payment of ₹{amount.toFixed(2)} has been processed successfully.</p>
                                <button
                                    onClick={resetPayment}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Make Another Payment
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6 border-b border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800">Payment Amount</h2>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-gray-600">Total to pay</span>
                                        <span className="text-2xl font-bold">₹{amount.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div 
                                            className={`payment-method p-4 border rounded-lg cursor-pointer flex flex-col items-center ${activeMethod === 'card' ? 'active' : ''}`}
                                            onClick={() => setActiveMethod('card')}
                                        >
                                            <i className="far fa-credit-card text-2xl text-blue-600 mb-2"></i>
                                            <span className="text-sm font-medium">Credit/Debit Card</span>
                                        </div>
                                        <div 
                                            className={`payment-method p-4 border rounded-lg cursor-pointer flex flex-col items-center ${activeMethod === 'netbanking' ? 'active' : ''}`}
                                            onClick={() => setActiveMethod('netbanking')}
                                        >
                                            <i className="fas fa-university text-2xl text-blue-600 mb-2"></i>
                                            <span className="text-sm font-medium">Net Banking</span>
                                        </div>
                                        <div 
                                            className={`payment-method p-4 border rounded-lg cursor-pointer flex flex-col items-center ${activeMethod === 'upi' ? 'active' : ''}`}
                                            onClick={() => setActiveMethod('upi')}
                                        >
                                            <i className="fas fa-mobile-alt text-2xl text-blue-600 mb-2"></i>
                                            <span className="text-sm font-medium">UPI</span>
                                        </div>
                                        <div 
                                            className={`payment-method p-4 border rounded-lg cursor-pointer flex flex-col items-center ${activeMethod === 'wallet' ? 'active' : ''}`}
                                            onClick={() => setActiveMethod('wallet')}
                                        >
                                            <i className="fas fa-wallet text-2xl text-blue-600 mb-2"></i>
                                            <span className="text-sm font-medium">Wallets</span>
                                        </div>
                                    </div>

                                    {activeMethod === 'card' && (
                                        <div className="mt-6">
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                                <input
                                                    type="text"
                                                    value={cardDetails.number}
                                                    onChange={handleCardNumberChange}
                                                    placeholder="1234 5678 9012 3456"
                                                    className={`w-full px-4 py-2 border rounded-md card-input ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
                                                    maxLength="19"
                                                />
                                                {errors.number && <p className="mt-1 text-sm text-red-600">{errors.number}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                                                <input
                                                    type="text"
                                                    value={cardDetails.name}
                                                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                                                    placeholder="Name on card"
                                                    className={`w-full px-4 py-2 border rounded-md card-input ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        value={cardDetails.expiry}
                                                        onChange={handleExpiryChange}
                                                        placeholder="MM/YY"
                                                        className={`w-full px-4 py-2 border rounded-md card-input ${errors.expiry ? 'border-red-500' : 'border-gray-300'}`}
                                                        maxLength="5"
                                                    />
                                                    {errors.expiry && <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                                    <input
                                                        type="password"
                                                        value={cardDetails.cvv}
                                                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                                                        placeholder="123"
                                                        className={`w-full px-4 py-2 border rounded-md card-input ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}
                                                        maxLength="3"
                                                    />
                                                    {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center">
                                                <input type="checkbox" id="saveCard" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                                <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">Save this card for future payments</label>
                                            </div>
                                        </div>
                                    )}

                                    {activeMethod === 'netbanking' && (
                                        <div className="mt-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Select your bank</label>
                                            {errors.bank && <p className="mb-2 text-sm text-red-600">{errors.bank}</p>}
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                {banks.map(bank => (
                                                    <div id="banksname"
                                                        key={bank.id}
                                                        className={`p-3 border rounded-lg cursor-pointer flex flex-col items-center ${selectedBank?.id === bank.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                                                        onClick={() => setSelectedBank(bank)}
                                                    >
                                                    <div>
                                                        <img width="80px"
                                                            src={bank.icon} 
                                                            alt={bank.name} 
                                                            className="h-10 w-10 object-contain mb-2"
                                                        />
                                                        <h5 className="text-xs text-center font-medium">{bank.name}</h5>
                                                    </div></div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeMethod === 'upi' && (
                                        <div className="mt-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                                            <input
                                                type="text"
                                                value={upiId}
                                                onChange={(e) => setUpiId(e.target.value)}
                                                placeholder="yourname@upi"
                                                className={`w-full px-4 py-2 border rounded-md ${errors.upi ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.upi && <p className="mt-1 text-sm text-red-600">{errors.upi}</p>}
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-600 mb-2">Or pay using UPI apps:</p>
                                                <div className="flex space-x-3">
                                                    <img src="https://logo.clearbit.com/phonepe.com" alt="PhonePe" className="h-10 cursor-pointer opacity-70 hover:opacity-100" />
                                                    <img src="https://logo.clearbit.com/googlepay.com" alt="Google Pay" className="h-10 cursor-pointer opacity-70 hover:opacity-100" />
                                                    <img src="https://logo.clearbit.com/paytm.com" alt="Paytm" className="h-10 cursor-pointer opacity-70 hover:opacity-100" />
                                                    <img src="https://logo.clearbit.com/bhimupi.com" alt="BHIM" className="h-10 cursor-pointer opacity-70 hover:opacity-100" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeMethod === 'wallet' && (
                                        <div className="mt-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Select your wallet</label>
                                            {errors.wallet && <p className="mb-2 text-sm text-red-600">{errors.wallet}</p>}
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                {wallets.map(wallet => (
                                                    <div 
                                                        key={wallet.id}
                                                        className={`p-3 border rounded-lg cursor-pointer flex flex-col items-center ${selectedWallet?.id === wallet.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                                                        onClick={() => setSelectedWallet(wallet)}
                                                    >
                                                        <img 
                                                            src={wallet.icon} 
                                                            alt={wallet.name} 
                                                            className="h-10 w-10 object-contain mb-2"
                                                        />
                                                        <span className="text-xs text-center font-medium">{wallet.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <button
                                            onClick={handlePay}
                                            disabled={isProcessing}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                       <Button variant="primary">Pay ₹{amount.toFixed(2)}</Button>
                                                    
                                                </>
                                            )}
                                        </button>
                                        <p className="mt-3 text-center text-xs text-gray-500">
                                            <i className="fas fa-lock mr-1"></i> Your payment is secured with 256-bit encryption
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
            );
        };
export default PaymentGateway;