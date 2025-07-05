
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, CreditCard, Smartphone, MapPin, Clock, Users, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: any;
}

const BookingModal = ({ isOpen, onClose, experience }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: 1,
    paymentMethod: "card"
  });

  if (!isOpen || !experience) return null;

  const handleInputChange = (field: string, value: string | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!bookingData.name || !bookingData.email || !bookingData.phone) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePayment = () => {
    // Placeholder payment logic - replace with actual Paystack/PayPal integration
    toast.success("Booking confirmed! You'll receive an email with details.");
    setTimeout(() => {
      onClose();
      setStep(1);
      setBookingData({ name: "", email: "", phone: "", participants: 1, paymentMethod: "card" });
    }, 2000);
  };

  const totalPrice = experience.price * bookingData.participants;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            {step === 1 && "Book Your Adventure"}
            {step === 2 && "Choose Payment Method"}
            {step === 3 && "Confirm Booking"}
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Experience Summary */}
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">{experience.title}</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>{experience.participants} max</span>
              </div>
              <div className="font-semibold text-emerald-600">
                KES {experience.price.toLocaleString()} per person
              </div>
            </div>
          </div>

          {/* Step 1: Booking Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={bookingData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
                <div>
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input
                    id="participants"
                    type="number"
                    min="1"
                    max="10"
                    value={bookingData.participants}
                    onChange={(e) => handleInputChange("participants", parseInt(e.target.value) || 1)}
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">What's Included:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {experience.includes.map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleNextStep} className="w-full bg-emerald-500 hover:bg-emerald-600">
                Continue to Payment
              </Button>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Choose Payment Method</Label>
                <div className="grid grid-cols-1 gap-3">
                  <Card 
                    className={`cursor-pointer border-2 transition-colors ${
                      bookingData.paymentMethod === "card" ? "border-emerald-500 bg-emerald-50" : "border-gray-200"
                    }`}
                    onClick={() => handleInputChange("paymentMethod", "card")}
                  >
                    <CardContent className="flex items-center gap-3 p-4">
                      <CreditCard className="w-5 h-5 text-emerald-500" />
                      <div>
                        <div className="font-semibold">Credit/Debit Card</div>
                        <div className="text-sm text-muted-foreground">Visa, Mastercard accepted</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card 
                    className={`cursor-pointer border-2 transition-colors ${
                      bookingData.paymentMethod === "mpesa" ? "border-emerald-500 bg-emerald-50" : "border-gray-200"
                    }`}
                    onClick={() => handleInputChange("paymentMethod", "mpesa")}
                  >
                    <CardContent className="flex items-center gap-3 p-4">
                      <Smartphone className="w-5 h-5 text-emerald-500" />
                      <div>
                        <div className="font-semibold">M-Pesa</div>
                        <div className="text-sm text-muted-foreground">Pay via mobile money</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Subtotal ({bookingData.participants} participant{bookingData.participants > 1 ? 's' : ''})</span>
                  <span>KES {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span className="text-emerald-600">KES {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNextStep} className="flex-1 bg-emerald-500 hover:bg-emerald-600">
                  Review Booking
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="font-medium">{bookingData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium">{bookingData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <span className="font-medium">{bookingData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Participants:</span>
                      <span className="font-medium">{bookingData.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span className="font-medium capitalize">{bookingData.paymentMethod === "mpesa" ? "M-Pesa" : "Card"}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center text-lg font-bold text-emerald-600">
                    <span>Total Amount:</span>
                    <span>KES {totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground p-3 bg-gray-50 rounded">
                  By proceeding, you agree to our terms and conditions. You'll receive a confirmation email with payment instructions and event details.
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button onClick={handlePayment} className="flex-1 bg-emerald-500 hover:bg-emerald-600">
                  Confirm & Pay
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingModal;
