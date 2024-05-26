import { StyleSheet, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = (dimensions) => StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    width: dimensions,
    height: dimensions,
    borderRadius: SIZES.small / 1.25,
  },
});

export default styles;
