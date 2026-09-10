import { useEffect } from 'react'
import TakeEatInAction from '../components/TakeEatInAction'
import TakeEatEcosystem from '../components/TakeEatEcosystem'
import RestaurantPartners from '../components/RestaurantPartners'
import TakeEatApps from '../components/TakeEatApps'
import FoodAndCommerce from '../components/FoodAndCommerce'
import DeliveryPartners from '../components/DeliveryPartners'
import LeFranceCaseStudy from '../components/LeFranceCaseStudy'

export default function TakeEatPage() {
    useEffect(() => {
        document.title = 'TakeEat | Itay Solutions'
    }, [])

    return (
        <>
            <TakeEatInAction />
            <TakeEatEcosystem />
            <RestaurantPartners />
            <TakeEatApps />
            <FoodAndCommerce />
            <DeliveryPartners />
            <LeFranceCaseStudy />
        </>
    )
}
