import { BentoCard } from "./bento-card";

export function LeadershipCard() {
  return (
    <BentoCard title="LEADERSHIP" className="col-span-1">
      <div className="space-y-3">
        <p className="font-bold">Texas Men's Lacrosse</p>

        <div className="text-sm space-y-2">
          <div>
            <p className="text-[#6B7280]">{"// Captain"}</p>
            <p className="pl-4">Led 40-person roster</p>
            <p className="pl-4">
              Rank: <span className="font-medium">#3</span> nationally
            </p>
          </div>

          <div>
            <p className="text-[#6B7280]">{"// Tournament Director"}</p>
            <p className="pl-4">3000+ attendees</p>
            <p className="pl-4">
              Raised: <span className="font-medium">$100K+</span>
            </p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
