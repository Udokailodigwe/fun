import React from 'react';

import { Typography, Container } from '@material-ui/core';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import clientImage from '../Assets/clientImage.JPG';

import useStyles from './styleRemarks';

const Remarks = [
    {
        Name: 'Tanya (Upwork client)',
        Position: 'Customer',
        Comment: 'Udoka provided my business with a customized application product that has helped my business record become 99% accurate. His product has helped my business save lots of cost and i am happy to have given him a trial at first.'
    },
    {
        Name: 'Franklin Harerimana',
        Position: 'FullStack Engineer at Codemotion Ninjas',
        Comment: 'Udoka was part of my trainees cohort. He effortlessly juggles the language(Javascript). But his strengths go far beyond staying on top of code details. Throughout the time I spent as his tutor, he proved his interest and drive for success in the field from time to time, as he is always going out of his way to make research and look for alternative solutions for problems whenever he had to. I can not recommend him more than enough. I simply believe he will be a worthy asset/human being for your company/Business.'
    },
    {
        Name: 'Mohamed El Hossiny',
        Position: 'Senior Web Developer at Sinai University',
        Comment: 'Been working with Udoka for two years as a mentor. During these years, he always provided a good collaborative and communicative attitude and also shows high understanding and skills in programming. I highly recommend him for any Frontend or Backend role in your company.'
    },
]

const Remark = () => {


    const classes = useStyles();
    return (
        <Container >
            <Typography variant='h3'>Remarks</Typography>
            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {Remarks.map(({ Name, Position, Comment }, index) => (
                    <SwiperSlide key={index} >
                        <img src={clientImage} alt='clientlogo' />
                        <Typography>{Name}</Typography>
                        <Typography>{Position}</Typography>
                        <Typography className={classes.remark}>{Comment}</Typography>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Remark;