import { useMemo } from "react";
import { themeTokens, type ThemeMode } from "../../../../data/themeTokens";
import { useTheme } from "@mui/material/styles";

export interface PCBPalette {
  substrate: string;
  substrateAccent: string;
  substrateEdge: string;
  traceGold: string;
  traceGoldDim: string;
  teal: string;
  tealDim: string;
  chipBody: string;
  chipFrame: string;
  label: string;
  viaCore: string;
}

export function usePCBPalette(): PCBPalette {
  const theme = useTheme();
  const mode = (theme.palette.mode as ThemeMode) ?? "dark";

  return useMemo(() => {
    const tokens = themeTokens[mode];
    return {
      substrate: tokens.pcbSubstrate,
      substrateAccent: tokens.pcbSubstrateAccent,
      substrateEdge: tokens.pcbSubstrateEdge,
      traceGold: tokens.pcbTraceGold,
      traceGoldDim: tokens.pcbTraceGoldDim,
      teal: tokens.pcbTeal,
      tealDim: tokens.pcbTealDim,
      chipBody: tokens.pcbChipBody,
      chipFrame: tokens.pcbChipFrame,
      label: tokens.pcbLabel,
      viaCore: tokens.pcbViaCore,
    };
  }, [mode]);
}