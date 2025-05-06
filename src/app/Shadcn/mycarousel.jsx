'use client';
import React from 'react'
import Watch from '../Images/page'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"  

    export default function mycarousel() {
  return (
    <Carousel>
        <CarouselContent>
            <CarouselItem> <Watch /> </CarouselItem>
            <CarouselItem> <Watch /> </CarouselItem>
            <CarouselItem> <Watch /> </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

  )
}

