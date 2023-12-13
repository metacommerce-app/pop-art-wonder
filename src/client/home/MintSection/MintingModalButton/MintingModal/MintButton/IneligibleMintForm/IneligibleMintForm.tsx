import Text from '@/components/typography/Text';
import { useTranslation } from 'react-i18next';
import Input from '@/components/inputs/Input';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import DisplayIf from '@/components/conditionals/DisplayIf';
import useEngage from '@/hooks/useEngage';
import { EngageEventTypes } from '@/types/engage';
import SubmitButton from '@/components/buttons/Button/SubmitButton';

const IneligibleMintForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { publishEvent } = useEngage();
  const { address } = useAccount();

  const handleOnChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    try {
      publishEvent(EngageEventTypes.InputtedEmail, { email, walletAddress: address });
      setIsSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='pt-2 flex flex-col gap-4'>
      <Text >
        {t(`Unfortunately you're ineligible to mint at this time. If you would like to notified of eligibility requirements for future exclusive drops or mints, please enter your email below.`)}
      </Text>
      <DisplayIf condition={!isSubmitted} falsy={<div className='text-center'>
        <Text className='py-2 font-extrabold text-base'>
         {t(`Your interest has been noted!  `) }  ✅
         </Text>
      </div>}>
        <div className='flex flex-row text-center items-center gap-2'>
          <div className='w-full'>
            <Input onChange={handleOnChange} value={email} placeholder='email@xyz.com' />
          </div>
          <div className=' w-1/3'>
            <SubmitButton onClick={onSubmit} />
          </div>
        </div>
      </DisplayIf>
    </div>
  );
};
export default IneligibleMintForm;
