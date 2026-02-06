import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-6">
      <FuzzyText 
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
>
  Page is not found
</FuzzyText>
    </div>
  );
}
