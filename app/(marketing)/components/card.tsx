import { CardConfigItem } from "@/config/marketing";
import Image from "next/image";
export const Card = ({ logo, title, description }: CardConfigItem) => {
  return (
    <div className=" overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <Image
          src={logo}
          className="dark:bg-white p-1 rounded-full "
          alt="logo"
          width={64}
          height={64}
        />
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};
