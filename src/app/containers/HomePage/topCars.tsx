import  React from 'react';
import styled from 'styled-components';
import tw from "twin.macro";
import { Icar } from '../../../car';
import { Car } from '../../components/Car';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import { SCREENS } from './../../components/responsive/index';

const TopCarsContainer = styled.div`
${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
`}`;

const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-black

    `}
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`

const testCar: Icar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: Icar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };



export function TopCars(){
    return <TopCarsContainer>
        <Title>
            Explore Our Top Deals
        </Title>
        <CarsContainer>
          <AliceCarousel controlsStrategy="responsive" keyboardNavigation disableButtonsControls disableSlideInfo  mouseTracking
          responsive={{
            0: {
                items: 1,
            },
            768:{
              items: 2
            },
            1024: {
                items: 3,
                itemsFit: 'fill',
            }
          }}
          items={[
            <Car {...testCar}/>,
            <Car {...testCar2} />,
            <Car {...testCar}/>,
            <Car {...testCar2} />,
            <Car {...testCar}/>,
            <Car {...testCar2} />,
            <Car {...testCar}/>,
            <Car {...testCar2} />,
          ]}
         
          />

         
        </CarsContainer>
    </TopCarsContainer>
}