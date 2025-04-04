import Button from "./Button";

export default function Home() {
  return (
  <div>
    <h1 className="text-3xl font-bold text-tahiti text-center mt-10">
    Yildiz Law Forms
    </h1>
    <div>
      <Button label={"Green Card Başvuru"} path={'/green-card-basvuru'}/>
    </div>
    
  </div>
  );
}
