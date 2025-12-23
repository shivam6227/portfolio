import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0b0b14] text-white px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto my-4 rounded-full" />
        <p className="text-gray-400">
          Have a project in mind or just want to say hello? Drop me a message
          and let's create something amazing together.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:opacity-90 transition">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            I'm always excited to work on new projects and collaborate with
            amazing people. Whether you have a specific project in mind or just
            want to explore possibilities, I'd love to hear from you.
          </p>

          <div className="space-y-4">
            <InfoCard
              icon={<Mail />}
              title="Email"
              value="shivamk47757@gmail.com"
            />
            <InfoCard icon={<Phone />} title="Phone" value="+91 8651540301" />
            <InfoCard icon={<MapPin />} title="Location" value="Delhi, India" />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500 transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default Contact;
