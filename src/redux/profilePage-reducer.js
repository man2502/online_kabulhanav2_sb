import axios from "axios";
import { authAPI, documentAPI, userDataAPI } from "src/api/api";
import { setScheduleThunk } from "./calendar-reducer";
import { initialSucces, setInitialized } from "./changes-reducer";
const SET_SECTIONS_DATA = "SET_SECTIONS_DATA";
const SET_OFFERED_DOC_DATA = "SET_OFFERED_DOC_DATA";
const SET_OFFERED_CREDIT_DATA = "SET_OFFERED_CREDIT_DATA";
const SET_OFFERED_CARD_DATA = "SET_OFFERED_CARD_DATA";
const SET_ERROR_LOGIN = "SET_ERROR_LOGIN";
const SET_AUTH = "SET_AUTH";
const SET_USER_TYPE = "SET_USER_TYPE";
const SET_REGISTER = "SET_REGISTER";
const SET_DOCUMENTS_DATA = "SET_DOCUMENTS_DATA";
const SET_DOC_MODE_DATA = "SET_DOC_MODE_DATA";
const SET_IS_CONNECTED = "SET_IS_CONNECTED";
const SET_IS_SUBMIT_GUEST = "SET_IS_SUBMIT_GUEST";
const SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_MESSAGE =
  "SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_MESSAGE";
const SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_CONTACTS =
  "SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_CONTACTS";

const SET_PROFILE_DATA = "SET_PROFILE_DATA";

const SET_CREDIT_TYPE_DATA = "SET_CREDIT_TYPE_DATA";
const SET_CARD_TYPE_DATA = "SET_CARD_TYPE_DATA";
const SET_ADD_OFFERED_DOC = "SET_ADD_OFFERED_DOC";
const SET_ISFETCHING = "SET_ISFETCHING";
const SET_POST_EMAIL_SUCCESS = "SET_POST_EMAIL_SUCCESS";
const SET_POST_EMAIL_ERROR_TEXT = "SET_POST_EMAIL_ERROR_TEXT";

const SET_PASSWORD_RESET_SUCCESS = "SET_PASSWORD_RESET_SUCCESS";
const SET_PASSWORD_RESET_MESSAGE = "SET_PASSWORD_RESET_MESSAGE";
const SET_BRANCHS_DATA = "SET_BRANCHS_DATA";

const initialState = {
  /////////////////profile
  isFetching: false,
  user: {
    userName: "",
    userEmail: "",
    userPhone: "",
    userId: "",

    name: "",
    surname: "",
    isPerson: true,
  },

  offeredDocData: [
    // {id:232, orderId:1, name: 'kredit un', value: 'kredit un', date:'2021/04/19', status: 3},
    // {id:234, orderId:2, name: 'Rekwisit', value: 'Racvisi', date:'2021/04/19', status: 2}
  ],
  offeredCreditData: [],
  offeredCardData: [],

  //////////////doc
  docModeData: [],

  isSubmit: false,
  resMessage: "",
  contacts: [],
  actionsData: [],
  /////////////////login
  username: "",
  password: "",
  error: "",
  isAuth: !!localStorage.getItem("ttbToken"),
  isSuccesRegistered: false,
  //////////////////credit
  creditTypesData: [],
  ////////////////////carts
  cardTypesData: [],
  isConnected: null,

  postEmailSuccess: false,
  postEmailErrorMessage: "",
  branchsData: [],
  passwordResetSuccess: null,
  passwordResetMessage: "",
  passportSeries: {
    seria_first: [
      { name: "I", value: "I" },
      { name: "II", value: "II" },
      { name: "III", value: "III" },
      { name: "IV", value: "IV" },
    ],
    seria_second: [
      { name: "AŞ", value: "AS" },
      { name: "AH", value: "AH" },
      { name: "LB", value: "LB" },
      { name: "MR", value: "MR" },
      { name: "DZ", value: "DZ" },
      { name: "BN", value: "BN" },
    ],
  },
  sections: [],
};

///login AC
export const auth = (authed) => ({ type: SET_AUTH, authed });
export const register = (reg) => ({ type: SET_REGISTER, reg });
export const setError = (error) => ({ type: SET_ERROR_LOGIN, error });
export const setDemoData = (
  userType,
  userName,
  userEmail,
  userPhone,
  name,
  surname
) => ({
  type: SET_PROFILE_DATA,
  demo: { isPerson: userType, userName, userEmail, userPhone, name, surname },
});
export const setUserType = (UType) => ({ type: SET_USER_TYPE, UType });
//////doc AC
export function setActiveDocData(number) {
  return { type: SET_DOCUMENTS_DATA, number };
}
export function setBranchsData(branchs) {
  return { type: SET_BRANCHS_DATA, branchs };
}
export function setSectionsData(sections) {
  return { type: SET_SECTIONS_DATA, sections };
}

export function setIsSubmitGuest(submitted) {
  return { type: SET_IS_SUBMIT_GUEST, submitted };
}
export function setIsConnected(connected) {
  return { type: SET_IS_CONNECTED, connected };
}

export function setIsSuccesSubmitGuestRequestMessage(object) {
  return { type: SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_MESSAGE, object };
}

export function setIsSuccesSubmitGuestRequestContacts(contacts) {
  return { type: SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_CONTACTS, contacts };
}

export function setDocModeData(needs) {
  return { type: SET_DOC_MODE_DATA, needs };
}
export function setCreditTypeData(credits) {
  return { type: SET_CREDIT_TYPE_DATA, credits };
}
export function setCardsTypeData(cards) {
  return { type: SET_CARD_TYPE_DATA, cards };
}

export function setOfferedDocData(offeredDoc) {
  return { type: SET_OFFERED_DOC_DATA, offeredDoc };
}
export function setOfferedCreditData(offeredCredit) {
  return { type: SET_OFFERED_CREDIT_DATA, offeredCredit };
}
export function setOfferedCardData(offeredCard) {
  return { type: SET_OFFERED_CARD_DATA, offeredCard };
}
export function setIsFetching(isFetch) {
  return { type: SET_ISFETCHING, isFetch };
}
export function setPostEmailSuccess(resetEmail) {
  return { type: SET_POST_EMAIL_SUCCESS, resetEmail };
}
export function setPostEmailErrorMessage(resetEmailError) {
  return { type: SET_POST_EMAIL_ERROR_TEXT, resetEmailError };
}

export function setPasswordResetMessage(passwordResetMessage) {
  return { type: SET_PASSWORD_RESET_MESSAGE, passwordResetMessage };
}
export function setPasswordResetSuccess(passwordResetSuccess) {
  return { type: SET_PASSWORD_RESET_SUCCESS, passwordResetSuccess };
}

export function setAddOfferedDoc(addOfferedDoc) {
  return { type: SET_ADD_OFFERED_DOC, addOfferedDoc };
}

export default function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SECTIONS_DATA:
      return {
        ...state,
        sections: action.sections,
      };
    case SET_BRANCHS_DATA:
      return {
        ...state,
        branchsData: action.branchs,
      };
    case SET_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        passwordResetSuccess: action.passwordResetSuccess,
      };
    case SET_PASSWORD_RESET_MESSAGE:
      return {
        ...state,
        passwordResetMessage: action.passwordResetMessage,
      };
    case SET_POST_EMAIL_ERROR_TEXT:
      return {
        ...state,
        postEmailErrorMessage: action.resetEmailError,
      };
    case SET_POST_EMAIL_SUCCESS:
      return {
        ...state,
        postEmailSuccess: action.resetEmail,
      };
    case SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.connected,
      };
    case SET_ISFETCHING:
      return {
        ...state,
        isFetching: action.isFetch,
      };
    case SET_OFFERED_DOC_DATA:
      return {
        ...state,
        offeredDocData: action.offeredDoc,
      };

    case SET_OFFERED_CARD_DATA:
      return {
        ...state,
        offeredCardData: action.offeredCard,
      };

    case SET_OFFERED_CREDIT_DATA:
      return {
        ...state,
        offeredCreditData: action.offeredCredit,
      };
    case SET_PROFILE_DATA:
      return {
        ...state,
        user: { ...action.demo },
      };

    case SET_ERROR_LOGIN:
      return {
        ...state,
        error: action.error,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.authed,
      };
    case SET_USER_TYPE:
      return {
        ...state,
        user: { ...state.user, isPerson: action.UType },
      };
    case SET_REGISTER:
      return {
        ...state,
        isSuccesRegistered: action.reg,
      };
    case SET_DOCUMENTS_DATA:
      return {
        ...state,
        activeDocMode: action.number,
      };
    case SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_MESSAGE:
      return {
        ...state,
        resMessage: action.object.message,
      };
    case SET_IS_SUCCES_SUBMIT_GUEST_REQUEST_CONTACTS:
      return {
        ...state,
        contacts: [
          ...action.contacts.map((u) => {
            return {
              name: u.name,
              email: u.email,
              phone: u.phone,
            };
          }),
        ],
      };
    case SET_DOC_MODE_DATA:
      return {
        ...state,
        docModeData: action.needs,
      };
    case SET_CREDIT_TYPE_DATA:
      return {
        ...state,
        creditTypesData: action.credits,
      };
    case SET_CARD_TYPE_DATA:
      return {
        ...state,
        cardTypesData: action.cards,
      };
    case SET_IS_SUBMIT_GUEST:
      return {
        ...state,
        isSubmit: action.submitted,
      };

    default:
      return state;
  }
}

export const refreshToken = (status, data, func) => {
  return async (dispatch) => {
    if (status === 401 && localStorage.getItem("ttb_refresh_token")) {
      var refresh = localStorage.getItem("ttb_refresh_token");
      localStorage.removeItem("ttb_refresh_token");
      try {
        const response = await authAPI.postRefreshToken(refresh);

        if (response.status === 200 && response.data.token_type) {
          await localStorage.setItem("ttbToken", response.data.access_token);
          await localStorage.setItem(
            "ttb_refresh_token",
            response.data.refresh_token
          );
          await dispatch(auth(true));
          await dispatch(setIsConnected(true));
          await dispatch(setError(""));
          await dispatch(func(data));
          dispatch(setIsFetching(false));
        }
      } catch (e) {
        if (e.message === "Network Error") {
          alert("Internet baglanyşygyňyzy barlaň");
          dispatch(auth(false));
          localStorage.clear();
          dispatch(setIsFetching(false));
        } else {
          if (e.response) {
            if (e.response.status === 401) {
              dispatch(auth(false));
              localStorage.clear();
              dispatch(setIsFetching(false));
            }
          }

          setIsFetching(false);
        }
      }
    } else if (status === 401 || !localStorage.getItem("ttb_refresh_token")) {
      localStorage.clear();
      dispatch(auth(false));
    }
  };
};

function zeroFill(number, width) {
  width -= number.toString().length;
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
  }
  return number + ""; // always return a string
}

export const clearThunk = () => {
  return async (dispatch) => {
    try {
      await dispatch(register(false));
      await dispatch(setIsSuccesSubmitGuestRequestMessage(""));
      await dispatch(setError(""));
    } catch (e) {
      // console.log(e.message)
    }
  };
};
export const clearReset = () => {
  return async (dispatch) => {
    try {
      dispatch(setPostEmailSuccess(false));
      dispatch(setPostEmailErrorMessage(""));
      dispatch(setPasswordResetMessage(""));
      dispatch(setPasswordResetSuccess(null));
    } catch (e) {
      // console.log(e.message)
    }
  };
};

export const loginUserThunk = (username, password, header) => {
  return async (dispatch) => {
    dispatch(setError(""));
    if (username.length < 6 || password.length < 8) {
      dispatch(setError("Ulanyjynyň adyny ýa-da gizlin açary dogry giriziň"));
      return;
    }
    try {
      dispatch(setIsFetching(true));
      const response = await authAPI.postLogin(username, password);

      if (response.status === 200 && response.data.token_type) {
        await localStorage.setItem("ttbToken", response.data.access_token);
        await localStorage.setItem(
          "ttb_refresh_token",
          response.data.refresh_token
        );
        // await dispatch(getUserDataThunk());
        await dispatch(auth(true));
        await dispatch(setIsConnected(true));
        await dispatch(setError(""));
      }
      dispatch(setIsFetching(false));
    } catch (e) {
      dispatch(setIsFetching(false));
      if (e.message === "Network Error") {
        dispatch(setIsConnected(false));
        dispatch(setIsFetching(false));
      } else if (e.response) {
        dispatch(setIsConnected(true));
        if (e.response.status === 400) {
          dispatch(
            setError("Ulanyjynyň adyny ýa-da gizlin açary dogry giriziň")
          );
        } else if (e.response.status === 401) {
          dispatch(setError(e.response.data.error));
        } else {
          dispatch(setError("Käbir näsazlyklar, bir az wagtdan barlap görüň"));
        }
      } else {
        dispatch(setError(""));
      }
    }
  };
};

export const resetEmailThunk = (reset_email) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setPostEmailErrorMessage(""));

    try {
      const response = await authAPI.postResetEmail(reset_email);
      if (response.data.status === 1) {
        dispatch(setPostEmailSuccess(true));
      }

      dispatch(setIsFetching(false));
    } catch (e) {
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        dispatch(setIsFetching(true));
        if (e.respone) {
          if (e.response.data.error.length > 0) {
            dispatch(setPostEmailErrorMessage("Email-i dogry giriziň"));
          } else if (e.response.status === 422) {
            dispatch(setPostEmailErrorMessage("Email-i dogry giriziň"));
          }
        }

        dispatch(
          setPostEmailErrorMessage(
            "Käbir näsazlyklar, bir az wagtdan barlap görüň"
          )
        );

        dispatch(setIsFetching(false));
      }
    }
  };
};
export const resetPasswordOutThunk = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await authAPI.postResetPasswordOut(data);
      if (response.data.success) {
        dispatch(setPasswordResetMessage("Açar üstünlikli dikeldildi"));
        dispatch(setPasswordResetSuccess(true));
      }
      dispatch(setIsFetching(false));
    } catch (e) {
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        dispatch(setIsFetching(true));
        if (e.respone) {
          if (e.response.status === 422) {
            dispatch(setPasswordResetMessage("Maglumatlar nädogry girizildi"));
          }
        }
        dispatch(
          setPasswordResetMessage(
            "Käbir näsazlyklar, bir az wagtdan barlap görüň"
          )
        );

        dispatch(setIsFetching(false));
      }
    }
  };
};

export const postFeedBackThunk = (data) => {
  return async (dispatch) => {
    dispatch(clearReset());
    try {
      dispatch(setIsFetching(true));
      const response = await userDataAPI.postFeedBack(data);
      if (response.data.status === 1) {
        dispatch(setPasswordResetSuccess(true));
        dispatch(setPasswordResetMessage("Üstünlikli ugardyldy"));
        dispatch(setIsFetching(false));
      }
    } catch (e) {
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        dispatch(setIsFetching(true));
        if (e.response) {
          if (e.response.status === 400 || e.response.status === 501) {
            dispatch(setPasswordResetMessage("Maglumatlar nädogry girizildi"));
          } else {
            dispatch(setPasswordResetSuccess(false));
            dispatch(refreshToken(e.response.status, data, postFeedBackThunk));
          }
        }

        dispatch(
          setPasswordResetMessage(
            "Käbir näsazlyklar, bir az wagtdan barlap görüň"
          )
        );

        dispatch(setIsFetching(false));
      }
    }
  };
};
export const postReceptionThunk = (data) => {
  return async (dispatch) => {
    dispatch(clearReset());
    try {
      dispatch(setIsFetching(true));
      const response = await userDataAPI.postReception(data);
      if (response.data.status === 1) {
        dispatch(setPasswordResetSuccess(true));
        dispatch(setPasswordResetMessage("Üstünlikli ugardyldy"));
        dispatch(setIsFetching(false));
      }
    } catch (e) {
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        dispatch(setIsFetching(true));
        if (e.response) {
          if (e.response.status === 400 || e.response.status === 501) {
            dispatch(setPasswordResetMessage("Maglumatlar nädogry girizildi"));
          } else {
            dispatch(setPasswordResetSuccess(false));
            dispatch(refreshToken(e.response.status, data, postReceptionThunk));
          }
        }

        dispatch(
          setPasswordResetMessage(
            "Käbir näsazlyklar, bir az wagtdan barlap görüň"
          )
        );
      }
      dispatch(setIsFetching(false));
    }
  };
};
export const changePasswordThunk = (data) => {
  return async (dispatch) => {
    dispatch(clearReset());
    try {
      dispatch(setIsFetching(true));
      const response = await authAPI.postChangePassword(data);
      if (response.data.status === 1) {
        dispatch(setPasswordResetMessage("Açar üstünlikli üýtgedildi"));
        dispatch(setPasswordResetSuccess(true));
      }
      dispatch(setIsFetching(false));
    } catch (e) {
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        dispatch(setIsFetching(true));
        if (e.response) {
          if (
            e.response.status === 422 ||
            e.response.status === 401 ||
            e.response.status === 400
          ) {
            dispatch(setPasswordResetMessage("Maglumatlar nädogry girizildi"));
          } else
            dispatch(
              refreshToken(e.response.status, data, changePasswordThunk)
            );
        }

        dispatch(
          setPasswordResetMessage("Käbir näsazlyklar, täzeden synanyşyp görüň")
        );

        dispatch(setIsFetching(false));
      }
    }
  };
};

export const logOutThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      dispatch(setInitialized());
      const response = await authAPI.postLogout();
      if (response.data.status === 1) {
        await localStorage.removeItem("ttbToken");
        await dispatch(setDemoData(null, "", "", "", "", ""));
        await dispatch(auth(false));
        await dispatch(setIsFetching(false));
      }
    } catch (e) {
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        await dispatch(auth(false));
        localStorage.clear();

        dispatch(setIsFetching(false));
      }
      //     if (error.response){
      //         if (error.response.status ===404){
      //        dispatch(setError('Maglumatlar nädogry girizildi'))
      //    }}
    }
  };
};

export const registerUserThunk = (data) => {
  return async (dispatch) => {
    dispatch(setError(""));
    try {
      dispatch(setIsFetching(true));
      const response = await authAPI.postRegister(data);
      if (response.data.status === 1) {
        await dispatch(register(true));
        await dispatch(setError(""));
        // history.push('/login')
        await dispatch({ type: "setTempUserType", isPerson: true });
        window.location.href = "https://online.turkmenturkbank.com.tm/login";

        await dispatch(setIsFetching(false));
      }
    } catch (e) {
      dispatch(setIsFetching(false));
      // if (axios.isCancel(e)) {
      //     alert('post rejected')
      // }
      if (e.message === "Network Error") {
        dispatch(setIsConnected(false));
        dispatch(setIsFetching(false));
      } else if (e.response) {
        dispatch(setIsConnected(true));
        if (e.response.data.error.username) {
          dispatch(setError("Bu atly ulanyjy eýýäm bar"));
        } else if (e.response.status === 401) {
          dispatch(setError(e.response.data.error));
        } else {
          dispatch(setError("Käbir näsazlyklar, bir az wagtdan barlap görüň"));
        }
      } else {
        dispatch(setError(""));
      }
    }
  };
};

export const getUserDataThunk = () => {
  const changeStatus = (status) => {
    switch (status) {
      case "rejected":
        return 0;
      case "success":
        return 1;
      case "pending":
        return 2;
      case "done":
        return 3;
      default:
        return 2;
    }
  };
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await userDataAPI.getUserData();
      const Correct = (date) => {
        let s = "";
        for (var i = 0; i < 10; i++) {
          s = s + date[i];
        }
        return s;
      };
      if (response) {
        if (response.data.status === 1) {
          await dispatch(setError(""));
          dispatch(setIsFetching(true));

          if (response.data.data.who === "org") {
            await dispatch(setUserType(false));
          } else if (response.data.data.who === "person") {
            await dispatch(setUserType(true));
          }

          await dispatch(
            setDemoData(
              response.data.data.who === "org" ? false : true,
              response.data.data.user.username,
              response.data.data.profile.email,
              response.data.data.profile.phone,
              response.data.data.who === "org"
                ? response.data.data.profile.name_liable
                : response.data.data.profile.name,
              response.data.data.who === "org"
                ? response.data.data.profile.surname_liable
                : response.data.data.profile.surname
            )
          );
          dispatch(setBranchsData(response.data.data.branchs));
          dispatch(setSectionsData(response.data.data.sections));
          const arr_doc = response.data.data.document_types
            ? await response.data.data.document_types.map((i, index) => {
                return {
                  id: i.id,
                  orderId: index + 1,
                  name: i.tmName,
                  value: i.tmName,
                  nameRu:i.ruName,
                  valueRu:i.ruName,
                  needs: i.conditions,
                  payment: i.payment,
                  hurry_amount: i.hurry_amount,
                };
              })
            : "";

          await dispatch(setDocModeData(arr_doc));

          // await dispatch(setDemoData(response.data.data.profile))

          const arr_credit = response.data.data.credit_types
            ? await response.data.data.credit_types.map((i, index) => {
                // debugger;
                return {
                  id: i.id,
                  orderId: index + 1,
                  debt_repayment_sources: i.debt_repayment_sources,
                  debt_repayment_ways: i.debt_repayment_ways,
                  name: i.tmName,
                  value: i.tmName,
                  needs: i.conditions,
                  amount: i.amount,
                  percentage: i.percentage,
                  time: i.time,
                  nameRu:i.ruName,
                  valueRu:i.ruName
                };
              })
            : "";
          dispatch(setCreditTypeData(arr_credit));

          const arr_card = response.data.data.card_types
            ? await response.data.data.card_types.map((i, index) => {
                return {
                  id: i.id,
                  orderId: index + 1,
                  name: i.tmName,
                  value: i.tmName,
                  nameRu:i.ruName,
                  valueRu:i.ruName,
                  needs: i.conditions,
                  image: i.image,
                  commission: i.commission,
                  day_money_restriction: i.day_money_restriction,
                  year_increase_amount: i.year_increase_amount,
                  payment: i.payment,
                  currency: i.currency,
                  hurry_amount: i.hurry_amount,
                  delivery_amount: i.delivery_amount,
                };
              })
            : "";
          dispatch(setCardsTypeData(arr_card));

          const arr_offered_doc = response.data.data.offered_documents
            ? await response.data.data.offered_documents
                .reverse()
                .map((i, index) => {
                  var base = i.document;
                  return {
                    id: zeroFill(i.id, 7),
                    orderId: index + 1,
                    status: changeStatus(i.status),
                    date: Correct(i.created_at),
                    name: i.document.tmName,
                    value: i.document.tmName,
                    is_hurry: i.is_hurry,
                    username: i.name,
                    surname: i.surname,
                    fullDate: i.created_at,
                  };
                })
            : "";
          dispatch(setOfferedDocData(arr_offered_doc));

          const arr_offered_card = response.data.data.offered_cards
            ? await response.data.data.offered_cards
                .reverse()
                .map((i, index) => {
                  var base = i.card;
                  return {
                    id: zeroFill(i.id, 7),
                    orderId: index + 1,
                    status: changeStatus(i.status),
                    date: Correct(i.created_at),
                    name: i.card.name_tm,
                    value: i.card.name_tm,
                    is_hurry: i.is_hurry,
                    username: i.name,
                    surname: i.surname,
                    fullDate: i.created_at,
                    will_delivered: i.will_delivered,
                  };
                })
            : "";
          dispatch(setOfferedCardData(arr_offered_card));

          const arr_offered_credit = response.data.data.offered_credits
            ? await response.data.data.offered_credits
                .reverse()
                .map((i, index) => {
                  var base = i.credit;
                  return {
                    id: zeroFill(i.id, 7),
                    orderId: index + 1,
                    status: changeStatus(i.status),
                    date: Correct(i.created_at),
                    name: i.credit.name_tm,
                    value: i.credit.name_tm,
                    percentage: i.credit.percentage,
                    amount_credit: i.amount_credit,
                    username: i.name,
                    surname: i.surname,
                    fullDate: i.created_at,
                  };
                  // amount: i.credit.amount, percentage: i.credit.percentage
                })
            : "";
          dispatch(setOfferedCreditData(arr_offered_credit));
        }
      }
      dispatch(setScheduleThunk());
      dispatch(initialSucces());

      dispatch(setIsFetching(false));
    } catch (e) {
      if (axios.isCancel(e)) {
        alert("post rejected");
      }
      if (e.message === "Network Error") {
        alert("Internet baglanyşygy barlaň");
        dispatch(auth(false));
        localStorage.clear();
        dispatch(setIsFetching(false));
      } else if (e.response) {
        await dispatch(refreshToken(e.response.status, "", getUserDataThunk));
      } else {
        dispatch(auth(false));
        localStorage.clear();
      }
      dispatch(setIsFetching(false));
    }
  };
};

export const postActionThunk = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));

      const response = await documentAPI.postDocData(data);

      // debugger
      if (response.data.status === 1) {
        await dispatch(
          setIsSuccesSubmitGuestRequestMessage(response.data.message)
        );
        await dispatch(
          setIsSuccesSubmitGuestRequestContacts(response.data.data.contacts)
        );
        await dispatch(setIsSubmitGuest(true));
        await dispatch(getUserDataThunk());
      }
      dispatch(setIsFetching(false));
    } catch (e) {
      // console.log(e.respone);
      if (e.message === "Network Error") {
        alert("Internet baglanyşygyňyzy barlaň");
        dispatch(setIsFetching(false));
      } else {
        if (e.response) {
          // console.log(e.respone);
          await dispatch(
            refreshToken(e.response.status, data, postActionThunk)
          );
          dispatch(setIsFetching(false));
        }
      }
      await dispatch(setIsSuccesSubmitGuestRequestContacts([]));
      await dispatch(setIsSuccesSubmitGuestRequestMessage(""));

      dispatch(setIsSubmitGuest(false));
      dispatch(setIsFetching(false));
    }
  };
};

export const newSubmitThunk = () => async (dispatch) => {
  await dispatch(setIsSubmitGuest(false));
};
