import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./ourservice.css";
import { Image, Button } from "react-bootstrap";

const OurService = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="service_container" id="service">
      <div className="service_inner_container pt-5 container">
        <h1
          className="text-center mb-5 "
          data-aos="fade-down"
          data-aos-once="true"
        >
          Our Service
        </h1>
        <div className="service_content container">
          <div
            className="service_content_img"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <Image
              src="/images/energyboost2.jpg"
              alt="energy image"
              fluid
              rounded
              className="p-2"
            />
          </div>

          <div
            className="details_div p-2"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <h3>Energy Boost</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <Button className="btn-success ">Book Now</Button>
          </div>
        </div>

        {/***       SERVICE CONTENT 2                    */}

        <div className="service_content2 container mt-2">
          <div
            className="service_content_img"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Image
              src="/images/skinglow6.jpg"
              alt="energy image"
              fluid
              rounded
              className="p-2"
              //   style={{

              //     height: "100%",
              //   }}
            />
          </div>

          <div
            className="details_div p-2"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <h3>Skin Glow</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <Button className="btn-success ">Book Now</Button>
          </div>
        </div>

        {/***       IMMUNE BOOST                    */}

        <div className="service_content container mt-2">
          <div
            className="service_content_img"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <Image
              src="/images/energyboost1.jpg"
              alt="energy image"
              fluid
              rounded
              className="p-2"
              //   style={{

              //     height: "100%",
              //   }}
            />
          </div>

          <div
            className="details_div p-2"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h3>Immune Boost</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <Button className="btn-success ">Book Now</Button>
          </div>
        </div>

        {/***       DETOX                   */}

        <div className="service_content2 container mt-2">
          <div
            className="service_content_img"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Image
              src="/images/detox.jpg"
              alt="energy image"
              fluid
              rounded
              className="p-2"
              //   style={{

              //     height: "100%",
              //   }}
            />
          </div>

          <div
            className="details_div p-2"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <h3>Detox</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <Button className="btn-success ">Book Now</Button>
          </div>
        </div>

        {/***       SPORT ENDURANCE AND RECOVERY                    */}

        <div className="service_content container mt-2">
          <div
            className="service_content_img"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Image
              src="/images/recovery.jpg"
              alt="energy image"
              fluid
              rounded
              className="p-2"
              //   style={{

              //     height: "100%",
              //   }}
            />
          </div>

          <div
            className="details_div p-2"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h3>Sport Endurance And Recovery</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              saepe alias ea soluta sequi exercitationem nisi minima itaque sint
              quam sed expedita. Autem, necessitatibus! Consequatur odit id
              quidem necessitatibus optio, ipsa dignissimos aperiam enim
              voluptatibus quisquam sequi veritatis ab impedit iure facilis,
              corrupti dicta eum voluptas blanditiis iste vitae sed?
            </p>
            <Button className="btn-success ">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
