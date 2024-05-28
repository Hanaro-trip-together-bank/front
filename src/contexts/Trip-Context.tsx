import { PropsWithChildren, createContext, useReducer } from "react";

type TripBasicInfo = {
  tripName: string;
  tripContent: string;
  tripGoalAmount: number;
  tripDay: number;
  tripStartDay: Date | null;
};

type TripContextProps = {
  trip: Trip | null;
  addBasicInfo: (basicInfo: TripBasicInfo) => void;
  addCountries: (countryIds: number[]) => void;
};

const TripContext = createContext<TripContextProps>({
  trip: null,
  addBasicInfo: () => {},
  addCountries: () => {},
});

type ReducerAction =
  | { type: "FIRST"; data: TripBasicInfo }
  | { type: "SECOND"; data: number[] };

const reducer = (trip: Trip | null, action: ReducerAction) => {
  switch (action.type) {
    case "FIRST":
      return { ...action.data, countryIds: [] };
    case "SECOND":
      return trip && { ...trip, countryIds: action.data };
    default:
      return trip;
  }
  return trip;
};

export const TripProvider = ({ children }: PropsWithChildren) => {
  const [trip, dispatch] = useReducer(reducer, null);

  const addBasicInfo = (basicInfo: TripBasicInfo) => {
    dispatch({
      type: "FIRST",
      data: { ...basicInfo },
    });
  };

  const addCountries = (countryIds: number[]) => {
    dispatch({
      type: "SECOND",
      data: countryIds,
    });
  };

  return (
    <TripContext.Provider value={{ trip, addBasicInfo, addCountries }}>
      {children}
    </TripContext.Provider>
  );
};
