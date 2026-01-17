import SendMessageButton from "../../elements/Button/SendMessageButton";

export default function MessageBox() {
  return (
    <div className="w-full space-y-6">
      <p className="text-3xl text-amber-50">Get in touch</p>

      {/* NAME */}
      <div className="relative">
        <input
          type="text"
          id="name"
          className="peer w-full bg-gray-600 text-amber-50 rounded-2xl p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-600"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-4 text-gray-300 text-sm transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-1
            peer-focus:text-xs
            peer-focus:text-orange-400"
        >
          Name
        </label>
      </div>

      {/* EMAIL */}
      <div className="relative">
        <input
          type="email"
          id="email"
          className="peer w-full bg-gray-600 text-amber-50 rounded-2xl p-4 pt-6 outline-none focus:ring-2 focus:ring-orange-600"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-4 text-gray-300 text-sm transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-1
            peer-focus:text-xs
            peer-focus:text-orange-400"
        >
          Email
        </label>
      </div>

      {/* MESSAGE */}
      <div className="relative">
        <textarea
          id="message"
          className="peer w-full bg-gray-600 text-amber-50 rounded-2xl p-4 pt-6 h-40 resize-none outline-none focus:ring-2 focus:ring-orange-600"
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-4 text-gray-300 text-sm transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-1
            peer-focus:text-xs
            peer-focus:text-orange-400"
        >
          Message
        </label>
      </div>

      <SendMessageButton />
    </div>
  );
}
