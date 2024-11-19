import React, { useEffect } from "react";
import Container from "./Container";
import Text from "./Text";
import Flex from "./Flex";
import Serverimg1 from "../assets/serverimg1.png";
import Serverimg2 from "../assets/serverimg2.png";
import Serverimg3 from "../assets/serverimg3.png";
import ServerContent from "./ServerContent";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GameServer = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once: true,
    })
  })
  return (
    <>
      <div className="bg-GamerServerBg bg-no-repeat bg-cover bg-center bg-Explorebg py-28">
        <Container>
          <div className="text-center mb-10" data-aos="fade-down" >
            <Text 
              text={"Popular Game Server"} as='h1'
              className={"text-white text-5xl font-bold font-Plus"}
            />
          </div>
          <div className="text-center px-[450px] mb-10" data-aos="fade-down">
            <Text
              text={
                "Choosing a game server hosting provider, consider factors such as server performance, reliability, customer support."} as='h1'
              className={"text-white text-base font-semibold font-Plus"}
            />
          </div>
          <div className="text-white">
            <Flex>
                <ServerContent imgSrc={Serverimg1} ServerText1={'GameServers.com'} ServerText2={'Provides game server hosting for a wide range of games, with options for dedicated and shared servers.'}/>
                <ServerContent imgSrc={Serverimg2} ServerText1={'Game Server Hosting'} ServerText2={'Provide dedicated or shared servers optimized for hosting specific games or game types.'}/>
                <ServerContent imgSrc={Serverimg3} ServerText1={'Dedicated Server Rental'} ServerText2={"Offer dedicated servers exclusively for users' gaming needs, providing full control and customization options."}/>               
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};


export default GameServer;
