import React from 'react'
import { DashboardCard } from '../dashboard/DashboardCard'
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gettrendingProductAction } from '../dashboard/dashboardAction'

export const Category = () => {
    const dispatch = useDispatch()
    // get the slug from url params using useParams
  const { slug} = useParams()
  console.log(slug)

    //get all products from state useing useSelector and filter them using slug
    const { trendingProducts} = useSelector ((state)=> state.trending)


    // loop the filtered products

dispatch(gettrendingProductAction(slug))
  return (
    <div>
        
    </div>
  )
}
