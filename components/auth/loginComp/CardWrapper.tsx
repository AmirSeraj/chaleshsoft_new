import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import BackButton from "@/components/auth/BackButton";
import Social from "@/components/auth/Social";
import { Header } from "@/components/auth/Header";
import { CardWrapperProps } from "@/lib/types";
import Divider from "../Divider";



export const CardWrapper = ({
  children,
  headerLabel,
  headerTitle,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {

  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader>
        <Header label={headerLabel} title={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="flex flex-col">
          <Divider />
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref ?? ''} />
      </CardFooter>
    </Card>
  );
};
