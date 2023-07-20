import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from '@/components/Button';
import DescriptionCard from '@/components/DescriptionCard';
import { AiFillBank, AiOutlineArrowRight } from 'react-icons/ai';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <Button
        name={'hello world'}
        icon={<AiOutlineArrowRight fontSize={12} />}
        varient={'primary'}
      />
      <Button
        name={'hello'}
        icon={<AiOutlineArrowRight fontSize={12} />}
        varient={'secondary'}
      />
      <Button
        icon={<AiOutlineArrowRight fontSize={12} />}
        varient={'secondary'}
      />
      <DescriptionCard
        title={'Online Courses'}
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        }
        icon={<AiFillBank size={70} />}
        varient={'primary'}
      />
      <DescriptionCard
        title={'Online Courses'}
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        }
        icon={<AiFillBank size={70} />}
        varient={'secondary'}
      />
        <DescriptionCard
        title={'Online Courses'}
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        }
        icon={<AiOutlineArrowRight size={70} />}
        varient={'primary'}
      />
    </main>
  );
}
