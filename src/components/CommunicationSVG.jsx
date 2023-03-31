import Mage from "../public/Online-communication-skills.svg";
import { Grid, Spacer, Image } from "@nextui-org/react";
export const Illustration = () => {
  return (
    <div className="container">
      <Spacer y={-12} />
      <Grid.Container justify="right">
        <Image src={Mage}  />
      </Grid.Container>
    </div>
  );
};
