import { atom } from 'recoil';

type InfoModalType = {
  showModal?: boolean;
  type?: 'info' | 'error' | 'success';
  infoModalType?: 'fatal-error' | 'payment' | 'delivery';
  headerText?: string;
  title?: string;
  message?: string | null;
};

export const InfoModalAtom = atom<InfoModalType>({
  key: 'InfoModalAtom',
  default: {
    showModal: false,
    type: 'info',
    headerText: 'Info',
    title: undefined,
    message: undefined,
    infoModalType: 'fatal-error',
  },
});
