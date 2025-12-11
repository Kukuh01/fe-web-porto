import SendMessageButton from "../../elements/Button/SendMessageButton";

export default function MessageBox() {
  return (
    <div className="w-full space-y-5">
      <p className="text-3xl text-amber-50">Get in touch</p>
      <input type="text" className="w-full bg-gray-600 rounded-2xl p-2" />
      <input type="text" className="w-full bg-gray-600 rounded-2xl p-2" />
      <textarea className="w-full bg-gray-600 rounded-2xl p-2 h-40" />
      <SendMessageButton />
    </div>
  );
}
