import { sleep } from 'ut2';

// 获取银行列表
export async function queryBanks() {
  await sleep();
  return [
    { bankShortIndex: 'esx', bankName: '交通银行', bankIndex: 'ocxpf' },
    { bankShortIndex: 'mpqkmgyd', bankName: '华侨银行（中国）', bankIndex: 'esrawy' },
    { bankShortIndex: 'ekekmfvg', bankName: '齐鲁银行', bankIndex: 'kxpn' }
  ];
}

// 获取支行列表
export async function queryBranchBanks(data: { province: string; city: string; bankName: string }) {
  console.log(data);
  await sleep();
  return [
    {
      fullBranchName: '中国农业银行',
      bankName: '中国民生银行',
      city: '九龙',
      province: '山西省',
      bankPaymentCode: 'CMBC'
    },
    {
      fullBranchName: '平安银行',
      bankName: '中国银行',
      city: '鞍山市',
      province: '山东省',
      bankPaymentCode: 'ZYB'
    },
    {
      fullBranchName: '中国光大银行',
      bankName: '中信银行',
      city: '淮南市',
      province: '重庆',
      bankPaymentCode: 'ICBC'
    },
    {
      fullBranchName: '中国民生银行',
      bankName: '河北银行',
      city: '黔西南布依族苗族自治州',
      province: '海南省',
      bankPaymentCode: 'CDRCB'
    }
  ];
}
