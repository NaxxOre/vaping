'use client'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import IconArrowRight from '../svgs/arrow-right';

export default function Footer() {
  return (
    <div className="w-full py-[46px] px-[20px] md:p-[72px] bg-[#1c1d20] flex flex-col gap-[40px]">
      <ContentSection />
      <CopyrightSection />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="flex justify-between w-full flex-wrap gap-[42px]">
      <TextContainer />
      <LinksContainer />
    </div>
  );
}

const DesktopCopyRight = styled.div`
  padding: 10px 0;

  @media (max-width: 762px) {
    display: none;
  }
`;

const MobileCopyRight = styled.div`
  padding: 10px 0;
  border-top: 2px solid #d9d9d97d;

  @media (min-width: 763px) {
    display: none;
    border: none;
  }
`;

function CopyrightSection() {
  return (
    <div className="flex justify-between items-center flex-wrap-reverse">
      <DesktopCopyRight className="border-t-2 border-[#d9d9d9] md:border-none">
        <p className="text-[16px] text-[#fff]">
          Copyright © 2024-2025 University of Information Technology{' '}
          <span className="opacity-50 text-[16px] text-[#fff]">|</span> All rights reserved.
        </p>
      </DesktopCopyRight>
      <MobileCopyRight>
        <p className="text-[13px] text-[#fff] mb-2">Copyright © 2024-2025 University of Information Technology</p>
        <p className="text-[13px] text-[#fff]">All rights reserved.</p>
      </MobileCopyRight>
      <div className="flex flex-col gap-[8px] pb-[10px] md:pb-0">
        <p className="text-[10px] md:text-[12px] text-[#fff] opacity-50">SOCIALS</p>
        <div className="flex justify-between gap-[20px]">
          <motion.span
            variants={LinkVariants}
            initial="hidden"
            whileHover="visible"
            className="relative text-[13px] md:text-[16px] text-[#fff] cursor-alias"
          >
            Facebook
            <Underline variants={UnderLineVariants} />
          </motion.span>
          <motion.span
            variants={LinkVariants}
            initial="hidden"
            whileHover="visible"
            className="relative text-[13px] md:text-[16px] text-[#fff] cursor-alias"
          >
            Instagram
            <Underline variants={UnderLineVariants} />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

const ButtonContainer = styled(motion.div)<{ width?: string }>`
  width: ${(props) => props.width};
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover .icon {
    transform: rotate(-50deg);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 32px;
  background-color: #3798a6;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
`;

const IconContainer = styled(motion.div)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #3798a6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -5px;
  transform-origin: center;
`;

const CircleDiv = styled(motion.div)`
  width: 28px;
  height: 28px;
  background-color: #3798a6;
  position: absolute;
  right: -10px;
  top: 8px;
`;

const containerVariants = {
  rest: {},
  hover: {},
};

const circleVariants = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 0, transition: { duration: 0 } },
};

const iconVariants = {
  rest: { rotate: -50, x: 0 },
  hover: { rotate: 0, x: 10 },
};

function TextContainer() {
  return (
    <div className="flex flex-col gap-[32px] md:gap-[56px] w-[364px]">
      <div className="text">
        <p className="text-[13px] md:text-[16px] text-[#fff] mb-3">
          Multiply your potential with us at UIT. Let’s embark on this journey together!
        </p>
        <p className="text-[13px] md:text-[16px] text-[#fff]">
          Made with <span className="text-[#05ef05]">🍀</span> from the UIT development team.
        </p>
      </div>
      <AnimationButton value="Get in touch" />
    </div>
  );
}

interface AnimationButtonProps {
  value?: string;
}

export function AnimationButton({ value = 'Get in touch' }: AnimationButtonProps) {
  return (
    <ButtonContainer variants={containerVariants} initial="rest" whileHover="hover" animate="rest">
      <Button type="submit">
        {value}
        <CircleDiv variants={circleVariants} />
      </Button>
      <IconContainer variants={iconVariants} transition={{ duration: 0.3 }}>
        {/* <FontAwesomeIcon icon={faArrowRight} className="text-[14px] text-[#fff]" /> */}
            <IconArrowRight />
      </IconContainer>
    </ButtonContainer>
  );
}

const LinkVariants = {
  hidden: {},
  visible: {},
};

const UnderLineVariants = {
  hidden: {
    width: 0,
    left: '50%',
  },
  visible: {
    width: '100%',
    left: 0,
    transition: {
      width: {
        duration: 0.3,
      },
    },
  },
};

const Underline = styled(motion.div)`
  position: absolute;
  background: #fff;
  height: 1px;
  bottom: 10%;
`;

interface LinksProps {
  title: string;
  data: { name: string; url: string }[];
}

function LinksContainer() {
  return (
    <div className="flex justify-between w-[450px] flex-wrap gap-[30px] pr-[20px] md:[pr-0]">
      <Links title="CONTACT DETAILS" data={[{ name: '+95-1-9664254', url: '#' }, { name: 'contact@uit.edu.mm', url: '#' }]} />
      <Links title="QUICK LINKS" data={[{ name: 'LMS', url: 'https://lms.uit.edu.mm/' }, { name: 'Library', url: '/academic/library' }]} />
      <Links title="RESOURCES" data={[{ name: 'Facebook', url: '#' }, { name: 'X', url: '#' }]} />
    </div>
  );
}

function Links({ title, data }: LinksProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <h5 className="text-[10px] md:text-[12px] opacity-50 text-[#fff]">{title}</h5>
      <div className="flex flex-col gap-[2px]">
        {data.map((item, index) => (
          <Link href={item.url} key={index}>
            <motion.span
              variants={LinkVariants}
              initial="hidden"
              whileHover="visible"
              className="relative text-[13px] md:text-[16px] text-[#fff] cursor-alias"
            >
              {item.name}
              <Underline variants={UnderLineVariants} />
            </motion.span>
          </Link>
        ))}
      </div>
    </div>
  );
}
