import Envelope from './components/Envelope';
import './Yes.css';

const Yes = () => {
  // Gifts inside the envelopes
  const messages = [
    'I need to be honest about how I feel',
'I care about you deeply, and I see a future with you'
,'But I don’t want to be someone you choose just because it makes sense',
'I want to be chosen because you actually want me So I need to understand'
  ];

  const envelopes = messages.map((message, index) => (
    <div key={index} className="flex flex-col items-center">
      <Envelope id={index}>{message}</Envelope>
      <p className="text-slate-100 mb-2 text-2xl">
        {['For today', '2morrow', 'Anytime', 'Not so Romantic time!'][index]}
      </p>
    </div>
  ));
  return (
    <>
      <div className="bg-red-950 w-screen flex flex-col justify-center">
        <div className="bg-black pt-14 pb-11 mx-4 md:mx-24 md:my-20 my-10 rounded-3xl shadow-2xl opacity-70 shadow-red-600">
          <div>
            <h1 className="text-slate-100 md:text-5xl text-3xl text-center red-shadow">
              Happy One-Sided Valentine's Day!
            </h1>
            <p className="text-slate-100 text-center mt-10 text-xl ">
              Just open the envelopes and read the messages inside. I hope they bring a smirk to your face, even if it's just for a Second.
            </p>
            </div>
          <div className="envelopes-container flex justify-center flex-col xl:flex-row gap-4 mt-4">
            {envelopes}
          </div>
        </div>
      </div>
    </>
  );
};
export default Yes;
