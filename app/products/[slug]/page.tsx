'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import LeatherClient from '@/components/Products/Leather/LeatherClient';
import NotFound from '@/app/not-found';
import FootWearClient from '@/components/Products/Footwear/FootWearClient';
import FarmingClient from '@/components/Products/Farming/FarmingClient';
import InfraDivisionClient from '@/components/Products/InfraDivision/InfraDivisionClient';
import HealthCareClient from '@/components/Products/Healthcare/HealthCareClient';


const Page = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'leather') return <LeatherClient />;
  if (slug === 'footwear') return <FootWearClient />;
  if (slug === 'farming') return <FarmingClient />;
  if (slug === 'infra') return <InfraDivisionClient />;
  if (slug === 'healthcare') return <HealthCareClient />;
  // if (slug === 'healthcare') return <Healthcare />;
  return <NotFound />;
};

export default Page;