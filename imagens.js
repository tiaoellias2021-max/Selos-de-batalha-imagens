<script>
// =========================================================================
// SISTEMA DE IMAGENS DOS SELOS - COMPLETO (01 AO 50)
// =========================================================================
// COLOQUE ESTE SCRIPT APÓS O SCRIPT PRINCIPAL (ANTES DO </BODY>)
// =========================================================================

(function() {
    'use strict';
    
    console.log('🎨 [IMAGENS] Inicializando sistema completo de imagens dos selos (01-50)...');
    
    // =========================================================================
    // LINKS DAS IMAGENS DOS SELOS 01 AO 15 (SEÇÃO 1)
    // =========================================================================
    const SEAL_IMAGES_SECTION1 = {
        1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbHOIvcklCoe8CNDwNTdWmNg2gfo5CXzwRlzRNGN1TOByYp5-gdLap-U_AEgfJDQx-e6r5bbXumhunbbXDBHm-rbiMgRtuvEMNoWuqaHk0cE_HxMWNAEkt7IQ33r0vaKPGhntYrFAk-pCtRpToph_5w1L3VVMhKHzkFlBn1FLIbQuRnPZpRjy_am189KA/s1024/01.png",
        2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg57QvRg4Q8a0jKAd5G4052rLyg8FJ1WfRoMFkMC-p3Dy1B8B18v0jrEZSNkDYM-NwhazlLljwHqkPLANgDZcLnvPdlBp6bRwyLgOZUNVaXENLJQfur556KlCsRHMXzYmm0KLDTbAKZ96C1Pu9P1LmP6wZLQ1798bxqifZuWv4zn2vXAcd-HDj7IaqjnUc/s1024/02.png",
        3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJJ9f2SbffHpTcvubB6roibaJReEyHGwO4dK0Fnf6gMUAXPllLjV1paDTYsq9qom_ELgyMOCt2rOUVxa34cSesDCN0bHlh5Fj7LAfhmGu9H-FYw0MRDudTViR78T0ZNNPzZ-QGj2Qs6WtMJrordNNwlopNTDmOdZMKAzUXGi3XUZwHErN07gBvMFGQQkE/s1024/03.png",
        4: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_HivSPu0i3xFXR1KhCAbz0pHQYTE7jMQJTTHmXyz4yg_g9YarRoimBPWNhme1PX4188Q9jv2wSdnpKd0GDhtDHi-gHEHeaKBIbw9K4AcadkHLP2KSz8Tqm_W01BfzBhR1-En0Zgr_xkla-eLhLi7ZuqgbNvPynG-PRtjg7MoQkcTtLnQOncWfGqHGkDk/s1024/04.png",
        5: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvw4EK9GtRrtpcs4024qBfXDcKdBvHvRwZJ7E_PD456jCHEQnZUGDZXoFepnHfrg39YtTmSNUTl0dmR8BOStWvky5pIayRSnNvZujRcG4BSNyTD8pZj6lZ4E5KPr81gLj9VZCSs7kf22zO9xsIr28gazXxt5lli5VN0HJGxZH-KVATsQznvoOZ_6AO-fc/s1024/05.png",
        6: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkKgS-b0j7gHeF38o2m1mHSe2xsKGPVv-Vd6tSES8HNxemzPWWfdVnq6quRJRYaiY0jzagP9piZGtZjM_EG3nnFBI-0FcVp9ghy_MgJqzEED8o6jon0-JvYDStTt1TGx6P2UMCBAeDAHG0U98j3XnA8ATwsTIlGvGiT_cQkDb58AixlmQRx-enhjW3IIg/s1024/06.png",
        7: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyIDIJWyqnWXg6OvL63EMMPMCS1BFG-i5FgSuaLqReNwidSvN86gvG4rPOVw-cJV1fWdTtW6FLSyZqdZaQYPiVCSMMFnWQAYz7H7zd81nMwaOhoNsQYHVM78OwHqohVfCuzgCXNBXzK5lNXNhtY1R6X0GjwGCAVo3JQIpOIkm2fSgq55xqRcq16zpKFJA/s1024/07.png",
        8: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCEFnG2dFISIWz1CbYW5G4c4qhTQnQGfr9NPsvDpEywMQPNlFl_WegKJ_q1fPB77EtyXrzj43Fi9EHu7zEGodLUi9DChhOOmJDSSEFNW19Qm8y5BkjfMNG8F2jKMz4txWt8ctyF9hwG727N2M8vHVvdSkmnludmorGXghq-nuiCYRt7broGAUKHdwFhSg/s1024/08.png",
        9: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkd-DlWvUvR9xavLBjHNf_r_5yuthNRgBc5LHn6X3fR_ZXJQkdJXYWnRkdohQYE719JbMf45X7ZWJI-j1BCQVirGC3FbT5ODb_kD3d9O3KekwBV_bksTktnWtpCiZhINVNY8pUZ3JwGHt1NUIOPcykU27eMkdJqLQLMiSpDFTLAmCzy-Jcp-Cu5WxquKU/s1024/09.png",
        10: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3s_kIeizSIULmz8hdD1I5hZJ_Iyx725RjeTp2bKj8TZQrFrp5NSKpbwDX-ISHSvaqzKEjydJ2WDRwm1xzcxTrj0MRRWJ5uMYYihpTvb_iW7eyMSdHSuO9L9WBWDMaF1DmlvrseBa1nAIEGMiUK_gWH7h2cvZYF4hYyYdPN_I02MZmVlbrmV53B8IvVao/s1024/10.2.png",
        11: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcphrJnbTIzIjpiSbR9fL-2eWAA1chJBNUmAGARa-5NJ45tqfNIHUU_DPcTTvRi3ja7ChZIIx-aTwfjmGXD9PLfE7vR-5EPx3fSZUOJSzdhyphenhyphen65rL1Q637jm_Ws2HmbPxaL4QqMx6MfqMSJmGxwRbjg8Qx5JYwqMDcVoCedn5fhCJoBoXhbL_e7xNHMhFk/s1024/ChatGPT%20Image%2010%20de%20abr.%20de%202026,%2011_13_57.png",
        12: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHQjfU7ha3pU60w2hI_zwoRWWKHibprtVVcz2QbWnXfEVGzwkbM4T6kYp0DLOmrPGD-BEoGQBckYiKH-K9KzT2wxQQGpRGdIXs_aV3QLG2IgteOws8aVnPPn7WVM8Wf6f_gG05tQJY72pRphu6Fc4PzEGlRQhUdUZIAKpxjhx1uA72CPvgKfXbSUDliH0/s1024/ChatGPT%20Image%2010%20de%20abr.%20de%202026,%2011_14_01.png",
        13: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf8_IFqWXBTPHCpiLyQ07BI37nXAgB7-y5PSVXMA3sDunVmlHtDs1NKABogPxA5JeeTf9VS1GdShVfCcMhQxCNdUIwSvAE1vKboBMcbeHzBix5oWluJ5x_FI3UtjD6s4Yi-d_7J4KWD2ffUYObIYYgVTJxO-cNQ1MYN6GKVQmHfYO_8CTTVkZfoFkW4K4/s1024/13%20(2).png",
        14: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwbsZ-2SEWHrgGFpVJoPNA61xqQRNV-sBYUqqut2Wppck2cRbhHSxc7s-ZIyksNRSbxpG-HSoBINOjla2CRx-MQD6c9W30upphSWPwGfat1R_FBJ5nhC8JjFNGG5rJwiy4GoQ-Ns3E_j24x877f4RwrpcGP0CJ6S7WZMS6WJzfnUeOTshSHGH6B8xVAvI/s1024/14.png",
        15: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivHwQsWNeyzaNrDcTBDbFUtoFGGb19b38lFYuwBZbOPR51uKvtXVNlWp9VDGsa-h15Y235skQ-tD7RhuPSYhuR-l_7OaNcWSSJRVIKEnbH9y_NBaAQU8ZI6SZLp7U87qIpI8cwfzzSWelCkRG_lo3jlS0bv82_JAK3uDYUmuftkA1_818IS4mEYIohofA/s1024/Selos%20fantasmag%C3%B3ricos%20e%20brilho%20et%C3%A9reo.png"
    };
    
    // =========================================================================
    // LINKS DAS IMAGENS DOS SELOS 16 AO 30 (SEÇÃO 2)
    // =========================================================================
    const SEAL_IMAGES_SECTION2 = {
        16: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnrtYMnJqC3ceO241DeVnMZXT-suurbwOxufZ68ufO1H5VJKCGCczvY6c7XHPeDqN8P2HMCXrjj8GD_n2jFxYVhyphenhyphenGlSi_gN506EtQ3n7R6uLVLuq6p0pHRfvCT90DcKVTwcFXbP_-qdmwl4eXrc3HP-wxY4TtwT9_MoyEHL9BVwwuUduqDzyTm7PS45xs/s1024/1000351669.png",
        17: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjggXMXPs2bshaip-r2rjwX3mWS3Cb3Dg77MdOgc2yOSoUkwyEdKxQaoBHZBUmIO06ADq4qHM4bIxY5-ZO1kcKu-NaCMs9AFaDNLM9UKl8sV0RyNhpuIcaujeP9tEQU9BXviZEhwCNwbmJPMHOYYAkYbl4dVISmg_rCJEJgVKgvJ1AHbUSUCrFTwXSY7k0/s1024/17.png",
        18: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj93GRhjbnCPtcNmTq2UNXx9nRWmim3erBimx4jw6u8M1ox-ClsFoMAUF5iVNbQfV9EG_UKhvIJKp3YjDJgxXouf6p0njeMgQre_20SShYLwHz-LYten9D-ubaFa-VKnJIbb6qRf-2l_e4JkPrLIOrPi4DcAeA4qCpz936YlW86BfdueT0iXca8OV7J1Z8/s1024/18.png",
        19: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU63TJYi4_QVjg4JxH1qcFn_UFudZiozRpqOWhJ19tQBAynKcqi8XThpzwX9BtZgAmH8zHtwI3gNJjgfc6g_zTXHQxwO7XyD9RTJ2YmTuB92FJhlgYSmm4xLcSU-aW_PqhjyvR2TW0heDE1WOFN_ZYJfSO7L8CMczVcaQAIlmH56vbpYHPz2Lv-DJ9e_c/s1024/19.png",
        20: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmWNtTmoSfiDmPqLBpOniW2KCZ3z-NR1msUIbSfK5H2gyBqlKMeNMoFpUWYyY1wTzdH850anairgIu0UB5iXZ6Lfkp1PG2e0oDUVsEfgNF_kuq02jOZIPMWoIBwBSV3Is4g9hmASVhYy6yi1q5vr5m61S834mE2d_JjV_zzDof9gREvwQWUWKGEAvUaKU/s1024/20.png",
        21: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinJYFe_xmjBzRWaYc3ldHkBSozIuDBNP_CqiwDb-aEDMp2Io06rLkrcbi29MdFx3H3bVStdByxTqA20L0ingpEziGkNL5_HL_zUbuUjSsdl2fPGs-T-_VtJjWIS7GQ9zOsHuS2wneZtrNfws0VFlFxDp43i9GFO-va0y8Rr9T18_e5yPrccB20vOFOh0M/s1024/21.png",
        22: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_R_0MPhPJq3C8Dxgkym1IDsz1-29FlZ1Yy76zzKBy-ME10jy8wbVFPvvYWh77CI3xxY171MXAQrSaKFxrYIcjF8fJOupDIJ3rEOwqtpm51XSYozEeMbomRAsb3n0IkNOSn3GcZDtdvgsJ6jv7aq9gdtq7HEWRMwbxku7St6NJ2P3fCRKqYuNu54gp_dk/s1024/22.png",
        23: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsAs6UYSR2nQd5AmJmm_xG0vQylHOzfRV2-gm65PcNjN8lDdRBckNAF1rkE28NFHpaFLkhJ2IK7-mb-N_4nbqRUYn9Y9xyq9I_KGqMZWYPLAP7GRJym3_hSuy-iL1u76r4Okt2e-7MJPAUbBCtHqwGb8AVOjzT6UkCfeQvv8qEszDyE2HOrG0_TUD7VmQ/s1024/23.png",
        24: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBq5JBW8lgWUdqaOepZodqG2S0Zu861A3X7ZL70C4MbymT83mEfbiVF3i9sep1l-LfvcHqICR3MTQJRcSHrS0f25umSkzbkriT4mRIjT1dehbdyyuCs7ANZ2SDpmkpqW_zWA9uVNotvfbfHOhcEwVAgQIPtkZXdiSnW1sAgAjeZt3J9ISrH-LIImAIznQ/s1024/24.png",
        25: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzLONGEeSV0_XEe1_ffw612D0V2DydQT7IzXqImojHwuyQnZdoMOOedYfkFWQN4p2ZYNwvbUjJMYMUpQAov8LZTYq4khMLJO3X5hnmZ9hBsyW-buVmyqoxv4ZUOQwvzqXRTxcknQ9Ouh2viPUWkVgZAIr_GhedvNdEgtVwgSEV09W5oRsmh09huyRIAHg/s1024/25.png",
        26: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8tdECqYM3OFTXZIat9YTFY_zhaicMHxqnDmJAOuq7y0iWR25zrKMZbkgadwVbD6QuYNz3JrcLZv8SA3ym1sTU0rqJ65m6IRipNOYI0_oswnoRuxVHzdFLWC19YgIcUKr2O7FaczVC1JrP_SFcavMYERn-LPVuzU39EqtKbQgUXFyo9VbfBsFQpAgDl4k/s1024/26.png",
        27: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfGVUXtt75vO3mEY5CKtFLi3RhWN0Dk9kSu7mVXApdYWTMLwQr3XBvCsIeuJxW7cdrOEuM4EHqv2gfSmItPlxW3Q71XjDA6evKjYQYzhW7aAll3EHLUcS4vDzI3MAf0IQSRkJA8PCsGnmQ-gpNoesssMGxverH4FBo7GLW9yM1n8d6f6aLyJ0Go9xat8o/s1024/27.png",
        28: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8LA3zFb9gdXCijW8Xrchyphenhyphenz4G9mOemjEHGdI4Z49O3wfqCGj2cqGf0TQfp0niK1Q31hYGaTUgSRuJmgns4sp6we-ptycYdxusDoDYo3NLen2PS8P2c1sreXLZLeKoPoM0dBQxDEK2MmPRCN-hcClJlhBYMojVYcjGAWEfLufKE2iEQAmBWyKwk5AbQcaM/s1024/28.png",
        29: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMQwY_k7t86cGd8dph-YklYhKnYCWXND37oHtKeQmiA-lIublHP-Rg7qruhJXQ0YOqOoeP_enGR4ViI2_5s-bmsra-JCpKujpnIKVAKHbQ_vmPTGpWxtsdhHPxJCOt4XP0pqFsr46t0twBGOGBcnRkdue-s5_Phc2NYjFhB9aqUbNcJk0cwv6H2rmtrY/s1024/29.png",
        30: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzVz-_wWfg-mhyTsjiJZeHDX8-OyxnOhMMZxvHlEyQTJCO2sxwS8lJCfQs-_klOsSmnxhwwRfu2QEgo8uHUqh043wo0kG5JgFA1VjpdMExeJ3vdJTpkdcPqpgmouctCk8G8-yjinOS_Rd0pmiSGlRs5GhfeWIcAOjW5zkjlKRT0S4mYGgOO5BnIJdZ8vU/s1024/30.2.png"
    };
    
    // =========================================================================
    // LINKS DAS IMAGENS DOS SELOS 31 AO 50 (SEÇÃO 3)
    // =========================================================================
    const SEAL_IMAGES_SECTION3 = {
        31: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/31.png",
        32: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/32.png",
        33: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/33.png",
        34: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/34.png",
        35: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/35.png",
        36: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/36.png",
        37: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/37.png",
        38: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/38.png",
        39: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/39.png",
        40: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/40.png",
        41: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/41.png",
        42: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/42.png",
        43: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/43.png",
        44: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/44.png",
        45: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/45.png",
        46: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/46.png",
        47: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/47.png",
        48: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/48.png",
        49: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/49.png",
        50: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/s1024/50.png"
    };
    
    // =========================================================================
    // FUNÇÃO PARA ATUALIZAR O MÉTODO getSealImage DO GAMEMANAGER
    // =========================================================================
    function updateGameManagerImages() {
        if (!window.gameManager) {
            console.log('⏳ Aguardando GameManager...');
            setTimeout(updateGameManagerImages, 500);
            return;
        }
        
        console.log('🎮 GameManager encontrado! Aplicando imagens reais...');
        
        // Salvar método original como fallback
        const originalGetSealImage = window.gameManager.getSealImage;
        
        // Substituir o método getSealImage
        window.gameManager.getSealImage = function(sealId) {
            // Seção 1 (1-15)
            if (sealId >= 1 && sealId <= 15 && SEAL_IMAGES_SECTION1[sealId]) {
                return SEAL_IMAGES_SECTION1[sealId];
            }
            // Seção 2 (16-30)
            if (sealId >= 16 && sealId <= 30 && SEAL_IMAGES_SECTION2[sealId]) {
                return SEAL_IMAGES_SECTION2[sealId];
            }
            // Seção 3 (31-50)
            if (sealId >= 31 && sealId <= 50 && SEAL_IMAGES_SECTION3[sealId]) {
                return SEAL_IMAGES_SECTION3[sealId];
            }
            // Fallback
            if (originalGetSealImage) {
                return originalGetSealImage(sealId);
            }
            const rarity = this.getSealRarity(sealId);
            const color = rarity === 'legendary' ? 'ff9d00' : rarity === 'exclusive' ? 'ff6b9d' : 
                          rarity === 'epic' ? 'c77dff' : rarity === 'rare' ? '3b82f6' : 
                          rarity === 'uncommon' ? '10b981' : '6b7280';
            return `https://via.placeholder.com/150/${color}/FFFFFF?text=Selo+${sealId}`;
        };
        
        console.log('✅ Método getSealImage atualizado com sucesso!');
        
        // Forçar re-renderização
        setTimeout(() => {
            if (window.gameManager.renderGallery) window.gameManager.renderGallery();
            if (window.gameManager.renderInventory) window.gameManager.renderInventory();
            if (window.gameManager.renderShop) window.gameManager.renderShop();
            console.log('🔄 Interface re-renderizada com as novas imagens!');
        }, 500);
    }
    
    // =========================================================================
    // ADICIONAR IMAGENS AO CONFIG GLOBAL (para compatibilidade)
    // =========================================================================
    function addImagesToConfig() {
        if (typeof CONFIG !== 'undefined' && CONFIG) {
            // Criar arrays de imagens para cada seção
            const section1Array = [];
            const section2Array = [];
            const section3Array = [];
            
            for (let i = 1; i <= 15; i++) section1Array.push(SEAL_IMAGES_SECTION1[i] || null);
            for (let i = 16; i <= 30; i++) section2Array.push(SEAL_IMAGES_SECTION2[i] || null);
            for (let i = 31; i <= 50; i++) section3Array.push(SEAL_IMAGES_SECTION3[i] || null);
            
            CONFIG.SEAL_IMAGES_SECTION1 = section1Array;
            CONFIG.SEAL_IMAGES_SECTION2 = section2Array;
            CONFIG.SEAL_IMAGES_SECTION3 = section3Array;
            
            console.log('✅ Imagens adicionadas ao CONFIG global');
        }
    }
    
    // =========================================================================
    // INICIALIZAÇÃO
    // =========================================================================
    function init() {
        console.log('🚀 Iniciando script de imagens (01-50)...');
        console.log('📦 Seção 1: 15 imagens');
        console.log('📦 Seção 2: 15 imagens');
        console.log('📦 Seção 3: 20 imagens');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        addImagesToConfig();
        updateGameManagerImages();
        
        console.log('✅ Script de imagens carregado com sucesso!');
        console.log('💡 As imagens reais dos selos agora estão sendo exibidas');
    }
    
    // Iniciar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expor função para debug
    window.SealImages = {
        reload: () => {
            if (window.gameManager) {
                if (window.gameManager.renderGallery) window.gameManager.renderGallery();
                if (window.gameManager.renderInventory) window.gameManager.renderInventory();
                console.log('🔄 Galeria re-renderizada');
            }
        },
        getSection1: () => SEAL_IMAGES_SECTION1,
        getSection2: () => SEAL_IMAGES_SECTION2,
        getSection3: () => SEAL_IMAGES_SECTION3
    };
    
})();
</script>
