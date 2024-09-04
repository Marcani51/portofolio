
const defaultSecretId = 'emr-registry-uat'
const lvSecretId = 'emr-registry-uat-lv'
const kjSecretId = 'emr-registry-uat-kj'
const rsuSecretId = 'emr-registry-uat-rsu'
const mrcccSecretId = 'emr-registry-uat-mr'

function getSecretId(orgId:any){
  let secretId = undefined
  if (orgId === 2){ 
    secretId = lvSecretId
  } else if (orgId === 3){
    secretId = kjSecretId
  } else if (orgId === 7){
    secretId = rsuSecretId
  } else if (orgId === 19){
    secretId = mrcccSecretId
  }
  return secretId || defaultSecretId
}
type EnvConfig = {
  [key: string]: {
    VITE_API_BASE_URL: string;
    VITE_API_BASE_URL_PROCEDUREKIT: string;
    VITE_API_UMS:string;
    VITE_API_KAIROS:string;
    VITE_API_KAIROS_INVENTORY:string;
    VITE_API_KAIROS_USER:string;
  };
}
const env: EnvConfig = {
  [defaultSecretId]: {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_API_BASE_URL_PROCEDUREKIT: import.meta.env.VITE_API_BASE_URL_PROCEDUREKIT,
    VITE_API_UMS:import.meta.env.VITE_API_UMS,
    VITE_API_KAIROS:import.meta.env.VITE_API_KAIROS,
    VITE_API_KAIROS_INVENTORY:import.meta.env.VITE_API_KAIROS_INVENTORY,
    VITE_API_KAIROS_USER:import.meta.env.VITE_API_KAIROS_USER
  },
  [lvSecretId]: {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_API_BASE_URL_PROCEDUREKIT: import.meta.env.VITE_API_BASE_URL_PROCEDUREKIT_LV,
    VITE_API_UMS:import.meta.env.VITE_API_UMS_LV,
    VITE_API_KAIROS:import.meta.env. VITE_API_KAIROS,
    VITE_API_KAIROS_INVENTORY:import.meta.env.VITE_API_KAIROS_INVENTORY,
    VITE_API_KAIROS_USER:import.meta.env.VITE_API_KAIROS_USER
  },
  [kjSecretId]: {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_API_BASE_URL_PROCEDUREKIT: import.meta.env.VITE_API_BASE_URL_PROCEDUREKIT_KJ,
    VITE_API_UMS:import.meta.env.VITE_API_UMS_KJ,
    VITE_API_KAIROS:import.meta.env. VITE_API_KAIROS,
    VITE_API_KAIROS_INVENTORY:import.meta.env.VITE_API_KAIROS_INVENTORY,
    VITE_API_KAIROS_USER:import.meta.env.VITE_API_KAIROS_USER
  },
  [rsuSecretId]: {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_API_BASE_URL_PROCEDUREKIT: import.meta.env.VITE_API_BASE_URL_PROCEDUREKIT_RSU,
    VITE_API_UMS:import.meta.env.VITE_API_UMS_RSU,
    VITE_API_KAIROS:import.meta.env. VITE_API_KAIROS,
    VITE_API_KAIROS_INVENTORY:import.meta.env.VITE_API_KAIROS_INVENTORY,
    VITE_API_KAIROS_USER:import.meta.env.VITE_API_KAIROS_USER
  },
  [mrcccSecretId]: {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_API_BASE_URL_PROCEDUREKIT: import.meta.env.VITE_API_BASE_URL_PROCEDUREKIT_MRCCC,
    VITE_API_UMS:import.meta.env.VITE_API_UMS_MRCC,
    VITE_API_KAIROS:import.meta.env. VITE_API_KAIROS,
    VITE_API_KAIROS_INVENTORY:import.meta.env.VITE_API_KAIROS_INVENTORY,
    VITE_API_KAIROS_USER:import.meta.env.VITE_API_KAIROS_USER
  }
}
export const Env = async (orgId?:any) => {
  const secretId: string = getSecretId(orgId)
  const secretValue = "";
  console.log(secretId)
  return {
    VITE_ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT,
    SECRET_ID: secretId,
    VITE_API_BASE_URL:  env[secretId].VITE_API_BASE_URL,
    VITE_API_BASE_URL_PROCEDUREKIT: env[secretId].VITE_API_BASE_URL_PROCEDUREKIT,
    VITE_API_UMS: env[secretId].VITE_API_UMS,
    VITE_API_KAIROS:env[secretId].VITE_API_KAIROS,
    VITE_API_KAIROS_INVENTORY:env[secretId].VITE_API_KAIROS_INVENTORY,
    VITE_API_KAIROS_USER:env[secretId].VITE_API_KAIROS_USER
  }
}
