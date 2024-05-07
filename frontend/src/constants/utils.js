export const dateFormat = 'YYYY-MM-DD';

export const tableTypes = {
  ACTION: 'action',
  MODAL: 'modal',
  FILE: 'file',
  PHONE: 'phone',
  VIDEO: 'video',
  IMAGE: 'image',
  NUMBER: 'number',
  RERENDER: 'rerender',
  CHECK_MARK: 'check_mark',
  DYNAMIC_COLUMN: 'dynamic_column_names'
};

export const PRIVATE_CODE = {
  CLIENT: 'minicli',
  KIOSK: 'minikio',
  MINIBAR: 'minimini',
  APP: 'miniapp',
  AD: 'miniad',
  ERROR_HISTORY: 'minikioerr',
  MEMBER: 'minimemb'
};

export const MAX_WELFARE_POINTS = 850000;

export const WELFARE_MAX_POINT = 850_000;

export const MAX_INT = 2147483647;

export const MAX_INT_VALUE = 2_147_483_647;

export const currencyUnitData = [
  {
    unit: 1_000,
    abbreviations: '천'
  },
  {
    unit: 10_000,
    abbreviations: '만'
  },
  {
    unit: 100_000,
    abbreviations: '십만'
  },
  {
    unit: 1_000_000,
    abbreviations: '백만'
  },
  {
    unit: 10_000_000,
    abbreviations: '천만'
  },
  {
    unit: 100_000_000,
    abbreviations: '억'
  }
  // {
  //   unit: 1_000_000_000,
  //   abbreviations: '십억'
  // },
  // {
  //   unit: 10_000_000_000,
  //   abbreviations: '백억'
  // },
  // {
  //   unit: 100_000_000_000,
  //   abbreviations: '천억'
  // },
  // {
  //   unit: 1_000_000_000_000,
  //   abbreviations: '조'
  // }
];

export const scopes = {
  SUPER: 'SUPER',
  ADMIN: 'ADMIN',
  ADMIN_PRODUCT_MASTER: 'ADMIN_PRODUCT_MASTER',
  ADMIN_INVENTORY_MASTER: 'ADMIN_INVENTORY_MASTER',
  ADMIN_WAREHOUSE_MASTER: 'ADMIN_WAREHOUSE_MASTER'
};

export const CHANNELS = {
  ALL: 'B2B,B2C,B2B2C',
  B2C: 'B2C',
  B2B: 'B2B',
  B2B2C: 'B2B2C'
};

export const LOCATION_TYPES = {
  BUFFER: 'BUFFER',
  VIRTURAL: 'VIRTUAL',
  PICKING: 'PICKING'
};

export const PICKING_STATUSES = {
  ONGOING: 'ONGOING',
  REQUESTED: 'REQUESTED',
  REGISTERED: 'REGISTERED',
  COMPLETED: 'COMPLETED',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};

export const MINIBAR_OWNERSHIP_TYPES = {
  CLIENT_OWNED: 'CLIENT_OWNED',
  COMPANY_OWNED: 'COMPANY_OWNED'
};
