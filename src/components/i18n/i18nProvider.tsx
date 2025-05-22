"use client";

import { PropsWithChildren, useEffect } from "react";
import "../../lib/i18n";

export default function I18nProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    // i18n will be initialized on the client side
  }, []);

  return <>{children}</>;
}
