"use client"

import CountryDetails from '@/components/CountryDetails';
import { notFound } from 'next/navigation';
import React from 'react'

const CountryPage = ({ params }) => {
    if(params.country!=="dubai" && params.country!=="usa" && params.country!=="australia"){
        return notFound();
    }

    return (
        <div>
            <CountryDetails country={params.country} />
        </div>
    )
}

export default CountryPage