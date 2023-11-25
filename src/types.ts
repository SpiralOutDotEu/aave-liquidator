export type Price = {
    priceInEth: string;
  };
  
  export type Reserve = {
    usageAsCollateralEnabled: boolean;
    reserveLiquidationThreshold: string;
    reserveLiquidationBonus: string;
    borrowingEnabled: boolean;
    utilizationRate: string;
    symbol: string;
    underlyingAsset: string;
    price: Price;
    decimals: number;
  };
  
  export type CollateralReserve = {
    currentATokenBalance: string;
    reserve: Reserve;
  };
  
  export type BorrowReserve = {
    currentTotalDebt: string;
    reserve: Reserve;
  };
  
  export type User = {
    id: string;
    borrowedReservesCount: number;
    collateralReserve: CollateralReserve[];
    borrowReserve: BorrowReserve[];
  };
  
  export type ApiResponse = {
    data: {
      users: User[];
    };
  };
  