import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";
import {background_color} from "@/lib/color-palatte";

const ContactMe = () => {
    return (
        <div className="p-4 md:p-8">
            <div className={`shadow-xl rounded-lg p-4 md:p-8 mb-6 ${background_color}`}>
                <ContactInfo />
            </div>
            <div className={`shadow-2xl rounded-lg p-4 md:p-8 ${background_color}`}>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactMe;