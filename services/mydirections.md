# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Vevey&destination=TriuFuntanella&waypoints=via%Geneva%Airport&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJp34g0TKDjkcRf-yXMrlE6I8",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "partial_match" : true,
         "place_id" : "ChIJN5MjroBkjEcRMKa4TvKpEeU",
         "types" : [ "airport", "establishment", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJQ6YIXHp62hIR6oBb3izhE-w",
         "types" : [ "colloquial_area", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 46.5659625,
               "lng" : 9.5681776
            },
            "southwest" : {
               "lat" : 42.1061048,
               "lng" : 6.0785297
            }
         },
         "copyrights" : "Map data ©2023 GeoBasis-DE/BKG (©2009), Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "83.0 km",
                  "value" : 83032
               },
               "duration" : {
                  "text" : "57 mins",
                  "value" : 3444
               },
               "end_address" : "Geneva Airport (GVA), Rte de l'Aéroport 21, 1215 Le Grand-Saconnex, Switzerland",
               "end_location" : {
                  "lat" : 46.2321535,
                  "lng" : 6.111034900000001
               },
               "start_address" : "Vevey, Switzerland",
               "start_location" : {
                  "lat" : 46.4628333,
                  "lng" : 6.8419192
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "61 m",
                        "value" : 61
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 46.4628918,
                        "lng" : 6.841993899999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e toward \u003cb\u003eRue de Lausanne\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uwqzG_iwh@@??@@?@?@?@??A@?@??A@??A@??A@??A@??A?A?A@??A?A?A@A?A?A?A?A?A?AA??A?A?A?AAA?AA??AAAAAAAA??AA?A?A?A?A?A?A@A@A??@A@A@?@A??@?@?@A??@?@?@?@?@?@?@?@?@?@@@?@"
                     },
                     "start_location" : {
                        "lat" : 46.4628333,
                        "lng" : 6.8419192
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 642
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 96
                     },
                     "end_location" : {
                        "lat" : 46.4669376,
                        "lng" : 6.8361328
                     },
                     "html_instructions" : "Exit the roundabout onto \u003cb\u003eAv. du Général-Guisan\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoute 9\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eGo through 1 roundabout\u003c/div\u003e",
                     "polyline" : {
                        "points" : "axqzGmiwh@U\\A@WZc@h@s@hA[d@gA~AA??AA?A??@A?A?A??@A??@A@?@A??@?@A@?@?@?@?@?@?@?@?@@@?@?@U`@IVADGJEJaBjC_@j@gAjBiApBa@p@S\\g@v@]j@Wb@ABe@v@k@v@"
                     },
                     "start_location" : {
                        "lat" : 46.4628918,
                        "lng" : 6.841993899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1853
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 136
                     },
                     "end_location" : {
                        "lat" : 46.4707101,
                        "lng" : 6.814058999999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eRte de Lavaux\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoute 9\u003c/b\u003e heading to \u003cb\u003eLausanne\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "kqrzGydvh@C@C@CBCBCBCDCBADA@?@A@?@A@?@?@?@?@A@?@?@?@?@@@?@?@?@?@G?C@EBCF]t@QV[d@{@rAS^Wb@Qd@CNEPKr@?HGz@?fB?vAE~G?@?jA?d@Ab@?TCX_@xD?JIbAEbA?bA?h@B~@@v@DzBBr@DvAA\\Bb@TrD@L?X?p@?VCXCREXMf@KVGNS^MNW\\OHSJ[N]RMHKHYZWf@Q`@MZIXK`@Ov@Id@Gd@I`AE~@C~@AVCfB?JA\\Aj@]bQCr@An@?JG^ErAKxC"
                     },
                     "start_location" : {
                        "lat" : 46.4669376,
                        "lng" : 6.8361328
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1168
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 81
                     },
                     "end_location" : {
                        "lat" : 46.47417739999999,
                        "lng" : 6.7998767
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRte Cantonale Vevey-Forel Lavaux\u003c/b\u003e (signs for \u003cb\u003eMoudon\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChexbres\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCorseaux\u003c/b\u003e)",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "}hszG{zqh@IPENCLCRA@CBELOb@ITCPA@@Jm@~CUjCC\\UzCc@pDOvAWdBOh@AHKn@[|B_@~CAHKn@CNI^Or@i@jCA@Kl@UjA[tBObAGr@Ef@Aj@Cr@AXEbBI`BEj@Kj@UjAMd@Oj@Mb@Uf@[f@]b@"
                     },
                     "start_location" : {
                        "lat" : 46.4707101,
                        "lng" : 6.814058999999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 967
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 46.4780279,
                        "lng" : 6.7890684
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRte Cantonale Vevey-Chexbres\u003c/b\u003e",
                     "polyline" : {
                        "points" : "s~szGgboh@ORYh@KPOTCHCLCLAL@VFfB?d@Aj@Cv@E~@Er@Ch@Ef@Ih@Md@Sp@Mb@WdAIj@Kx@QrAKh@GTGLADOXWj@[l@Ub@gA|BO^KVA@IVIVIVELILOPQNSVQXKTI\\EXEZId@M`@GNOZQXSVUZEFKn@UjBK^KT"
                     },
                     "start_location" : {
                        "lat" : 46.47417739999999,
                        "lng" : 6.7998767
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 333
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 46.4793922,
                        "lng" : 6.785234
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eChem. du Mont\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uvtzGu~lh@]~A[fAEXGTEL[t@Sf@e@xA_@|@ABU~@Qv@U|AIh@A^"
                     },
                     "start_location" : {
                        "lat" : 46.4780279,
                        "lng" : 6.7890684
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 178
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 46.4798368,
                        "lng" : 6.783004500000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRte de Vevey\u003c/b\u003e",
                     "polyline" : {
                        "points" : "e_uzGuflh@U~ASfBG`AEd@ALMlAQp@"
                     },
                     "start_location" : {
                        "lat" : 46.4793922,
                        "lng" : 6.785234
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 161
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 46.4805392,
                        "lng" : 6.7812242
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRle de Grinaz\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_buzGwxkh@Sd@Sb@Ml@CJALERK`@[p@UZABABGdA"
                     },
                     "start_location" : {
                        "lat" : 46.4798368,
                        "lng" : 6.783004500000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 276
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 46.4816682,
                        "lng" : 6.7784508
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRue du Bourg\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kfuzGsmkh@AVAPEPEJA@OJMJQR]\\ML[b@QVCDCBu@`ACDGLGNENCR@p@Ft@Fj@Bb@"
                     },
                     "start_location" : {
                        "lat" : 46.4805392,
                        "lng" : 6.7812242
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 224
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 46.4823798,
                        "lng" : 6.7761043
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eGrand'Rue\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mmuzGi|jh@H~@NrA?lAKb@Ob@i@lAOVMVa@Za@P"
                     },
                     "start_location" : {
                        "lat" : 46.4816682,
                        "lng" : 6.7784508
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 46.4831489,
                        "lng" : 6.775748399999999
                     },
                     "html_instructions" : "At the roundabout, continue straight onto \u003cb\u003ePl. du N\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "{quzGsmjh@?AAA?AA??AA?A?A?A?A??@A??@A??@?@?@A??@?@?@?@G?WHMDa@N_@NA@SH"
                     },
                     "start_location" : {
                        "lat" : 46.4823798,
                        "lng" : 6.7761043
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 663
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 46.4876544,
                        "lng" : 6.7705343
                     },
                     "html_instructions" : "\u003cb\u003ePl. du N\u003c/b\u003e turns slightly \u003cb\u003eleft\u003c/b\u003e and becomes \u003cb\u003eRte du Genevrex\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uvuzGmkjh@Y`@EHCJMf@Sv@Md@CJELKd@KPGN[RSHSH_@Di@JSHGFA@GHEJIJWd@o@fAGHWb@u@tAIN?@KFEDWf@EDcA|AQX[^_@\\?@KFA@c@\\]XOFEBIBC@EB[NMFE@MF_@P"
                     },
                     "start_location" : {
                        "lat" : 46.4831489,
                        "lng" : 6.775748399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 46.4882914,
                        "lng" : 6.771143599999999
                     },
                     "html_instructions" : "Take the ramp to \u003cb\u003eLausanne\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "yrvzGyjih@k@IQIGEKEQS?AKSOo@"
                     },
                     "start_location" : {
                        "lat" : 46.4876544,
                        "lng" : 6.7705343
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "19.1 km",
                        "value" : 19130
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 736
                     },
                     "end_location" : {
                        "lat" : 46.5645159,
                        "lng" : 6.567855199999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eA9\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "yvvzGsnih@?o@D_@BSFSJOHOLKHELGJAJ?D?F@H@D@JDJJDD@@FHNZBLBJBT@XAZC\\EPCHERa@|AUv@KZc@pAwA|DWt@Ur@Or@{@~BuB|FSh@IT[z@e@nAoAtDy@`CSp@]lA[hAGX_@vAsAzFI\\K`@_AdGq@fFATMxA?BGz@CZCV]dESnBAJCVEt@Eh@E\\AFEd@k@vDKd@AFYjAo@~Bw@bBu@rAKPYb@SXGFwAhBy@~@q@~@k@~@_@v@q@`BGTA?Mb@CFCHYhA[lAW|ASxAO~AQrCg@fJAXCb@ALMvA]bCUlAOn@Ml@A@?B_@lAw@hBi@nAo@tAe@fAe@hA{@dC[tA[rAQz@QjAUvBM|AEf@Cd@GpAAPGvBAtC?xDDvDJbDF|BJrBBl@LzBTxBv@tH\\~DFv@F|@HzABr@HtB?tBG|CSpCSzAIl@Oz@Mj@U~@]fAe@tAk@nAa@z@s@vA_ChE}BjE}C|FKNmBtDoCfFWb@KToAtBeAxA_AjAw@z@EDWVo@j@gAz@}@r@mAx@mAbAi@b@k@h@]^A@e@h@WZi@l@ORYd@oAzBS`@S`@kBpDk@dAQZEHY^ILq@|@MN[`@o@n@EHg@b@e@f@e@`@iAz@MJOJw@n@w@p@q@l@o@p@e@f@g@n@cApASZ]h@ILw@rA]n@[p@y@`Bq@`BMb@CFM`@c@zASl@[hAU|@Kb@]dBWvACTG^CN?@CNKx@SfBObBMhBUzCCTCXEl@MbBMzA[lCOhAUzAc@|BId@Sv@Kb@q@dCk@hBi@tAm@xAa@v@c@z@_A`BIJq@dAuAdBo@n@w@v@e@b@A?YTC@CBA@gCfBOJA?w@j@wBz@uChAe@Pw@VkDpAOFMDA?y@\\eDhAkAd@iCz@gJ|Cu@Xg@PmAd@yAj@aA^c@T]PYPoAp@k@^c@\\gBzAm@l@y@~@w@bACBi@v@c@p@e@z@aC`FSh@Sj@Wv@a@lAYbAW|@AHS~@UfA]nBGb@Kp@CTKv@Ef@SlBSnCMtBGdAEp@[fEGt@OtAQzAOfAQjAa@nBo@rCe@jBIXGR_@rAGVELKVUv@gCvIaAzCIVEJUx@sB`HGNcGlS]fA[fAy@zCMXY`ASr@_@nAW~@_@lA?@]rAYvASdAKj@Ip@Gh@Gf@KlAAREd@Cp@Ej@Ah@CdAAp@Aj@?v@@d@BrA@n@Bp@FnAHhAJhARnCPnBH`AHz@@BFh@L|B?FFlABzA?lBAlAIhBIvAMvAM|@UxA_@dB[pA_@jAe@tAg@pAs@~AA@c@x@{AjCi@|@s@dAy@dAwAhBa@h@A@W\\eDfECD]b@Y^iAzA_@j@{@pA[f@[f@c@x@y@zAqBjEQ\\y@rBa@fAe@rAu@fCUr@Sv@Kb@Oj@e@nBUjASbAQv@UvAYfB]zBGf@?@CLEb@In@Ih@YlCk@|FEZMrAGz@eAvMyAjRGp@Gr@MdBUxCk@pHANeCb[CPWlCKr@_@|BQ~@WdAa@tAg@zAWj@GLCDQ`@k@hAy@rAuBhCs@p@c@\\EDOLw@r@qCdCUVkBlBm@t@aA|A_@p@INm@rAi@nAg@nAe@|Aa@fBCJQx@g@dCIf@AFE^_@tCCN_@rDGx@Gp@Gr@MfBg@lH[fFYbDGn@ARE\\y@rIC^AFEf@{AbMSfBIl@{@lGIh@?@QbAaArGyAzJ[zBEb@AFGh@_@bDQ`BK~AIjAEx@APA^Ch@CxACdBAjA?D@l@@`@FzB"
                     },
                     "start_location" : {
                        "lat" : 46.4882914,
                        "lng" : 6.771143599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1272
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 57
                     },
                     "end_location" : {
                        "lat" : 46.56087950000001,
                        "lng" : 6.560525699999999
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eGenève\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gse{Gcxag@?dA?@@`@D~@?X?R?|@?d@Ab@Ex@OvAGd@Ml@Ov@a@vAe@nAm@|AQb@O\\CL_@dAYpAKh@Gl@Eh@AZA`@?Z@\\FxALt@P`ARj@T^Tf@PTX^NP@@NLBBNHRHFDLF^L^HVBL?J@P?VCLANCXGPG`@Oh@Y~@o@^Y@Ab@[vHcEZ]"
                     },
                     "start_location" : {
                        "lat" : 46.5645159,
                        "lng" : 6.567855199999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2037
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 46.5438348,
                        "lng" : 6.5681726
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eA1\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "o|d{Gij`g@\\O~C{AhEaClCaB~@m@|DoCtByAbBmA|BeBvC}BfCmBz@o@`C_Bv@e@jAq@ZQbB{@HEtAq@nBy@|B{@~@YpA[dB[LAf@I\\Ef@Ex@IDAp@C^Ct@C`A?r@@~AHtAJ`AJd@Hd@FdCh@ZH\\J"
                     },
                     "start_location" : {
                        "lat" : 46.56087950000001,
                        "lng" : 6.560525699999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1035
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 46.53917490000001,
                        "lng" : 6.556916600000001
                     },
                     "html_instructions" : "At the interchange \u003cb\u003e17-Ecublens\u003c/b\u003e, keep \u003cb\u003eright\u003c/b\u003e and follow signs for \u003cb\u003eE25\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE62\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eA1\u003c/b\u003e toward \u003cb\u003eGenève\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}qa{Gazag@XRh@Vv@f@ZXXVTVVXRVNVXd@Tf@JTFLNb@LZRt@Lb@XzAXhBd@nDT`BHh@@FHn@RxAJn@^zBNv@DRF\\H`@ZzATdAVjANf@V`ALd@h@lB@Fj@hBb@nATp@Zh@"
                     },
                     "start_location" : {
                        "lat" : 46.5438348,
                        "lng" : 6.5681726
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "49.3 km",
                        "value" : 49266
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1686
                     },
                     "end_location" : {
                        "lat" : 46.2554772,
                        "lng" : 6.136767799999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eA1\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE62\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "yt`{Gws_g@Rh@z@vBPb@Vb@Tb@l@pAd@`Av@xABDlBhDz@zAl@dAlArBVb@Vb@jArBLRLRFLHLhHjMJP@@dAjBxCfF|ApCnAzBz@~AbBjD`@~@r@dBj@rAh@xAd@tAd@zAd@xAb@|Ad@jBXjAn@pCv@hEh@fDf@jDZ`Cp@~EVpBvBbObBzJb@dC?@Ln@z@tEt@tDd@tB|@fEf@zBp@tCpAlF`@~AV`A~AfGHT@BH\\\\lATx@Nf@@DVx@\\hAf@bBp@xBL`@n@pBjBvFBFx@bCRj@Rj@DLtDtKFPDJL^p@pB`@jAd@rAj@|Af@vAn@hBr@tBbAnCRj@FNZ|@~@pC`@jABFr@pBBJl@bBl@lBHVL`@Lf@`@zATz@ZvAl@rCDPDPHXFZNp@t@pDXlAZtARt@FRFRDRX`ANb@l@lB^~@Nb@Rd@\\r@^x@b@|@p@lAr@jA\\l@\\j@^l@^l@|@tAZh@p@dAPX`@n@NT^f@@Bj@~@jDrFhAfBjAfBh@|@\\f@n@`AHPbA`BLTfBtC~@jB@@LT~@bBh@~@zAtCd@v@^t@z@`BvBfEl@jA|@lBDFjAdCnAnC~@tB\\v@Th@Zp@FNFLj@pAVl@Nd@LZJVHRFLFLRf@^z@`@dAPb@\\|@Xx@l@zAFNXt@Z|@z@bCx@`CzAlEJZJXpCtIXbAX|@n@tBrAlE|@bD`@|ANf@@DHZzAbG~AnGj@fCZlAlAtFH^b@nBXrAjAnFvAzGLn@@B^~ANr@J^|AbHLh@t@rCv@~CHVl@|BLb@@FFTh@dBr@dCnBbGZ~@lAhD~@fClB~E|@xB@Br@`BfBxDXj@d@`A\\t@jCjFzB|D|@zAlArB^n@PV~@vAbAzAp@bAfA~At@bAdAzAlCtDx@jAnAhBtArBZf@fBrCt@jAb@t@Xj@t@rArApCdA|Bl@xAl@|AfAzCd@vAJZXz@V|@Rp@x@vC\\vAPv@Ll@ZrARhAVrARdAJh@Jj@`@pCh@dEZhC\\zDPzBPfC@ZJfBFvANrEF~CBnC?xDAlBCxCGbCEpAGlBMhCSbDMhBStCAb@Ed@El@KnAEl@GfAKhA[tECZ?LANInACx@CXAZANEtAE|@GlCChB?ZAt@?v@?HAlC?fAB|CFpEHdDFjB@`@B^b@~JL~BRzDBR@PHxANjCl@pJFlAlCnc@fDjj@HpAnArSnAhTDf@Bf@xAdVDn@Fn@d@`Hf@zGj@dGvAfNF^F`@f@~DbA~Gh@`DNx@Hf@~@vFdDjQP`AjEjULl@Jj@jF|XFXFZxEpVHb@t@`EH^d@dCNp@RfAd@bC~@~Eb@|Bv@pDpA|FXjApA`F|AlFNd@dA`DjCnHf@nAnAzCDH\\x@JVJTjAdC~BtEdApBl@fAbC`EnCfEV^V^T^`GvIrElHnB`D~CnFn@lAtA`CvAjCvCvFnCtFdBrDNZ@@P^`AvBl@rA|@pBfAjCx@jBd@jAb@fAh@rAHPRj@Tf@f@pAt@pBx@|Bj@xAf@vABHRl@FPBLDJFT`@fAXx@Z~@Vv@Rn@vAlErB~G`D~KtBrHFPPl@Lf@|AlFHZ`@pAb@|An@xBzD`MxBzGjCzHzAjEXv@rArDp@fBjD`J|AzDpB~ErB`F~ClHxB|Ej@jAZp@nBdE|DdIbUzc@Vf@zGvMp@rAzC~FHNbEjIbMlVr@vAtC|FvChGjBnEN`@FJLX~AtDjAvCHRN`@HVTj@Nb@N`@d@rAt@pBfBnFlAjDjBhGBJHVBHBFjDtLjCrJ|ApFtEvOpCpIzCvIn@dB`@fAb@fAtExKjAnCfBxDf@fAnAfCzBpEtAhChBjDjBhDxAdClD|FxDbG|A~BdDxERXRVbCdDjChD`CtCtBdCnAvA\\^Z^`@b@nBtBPRPRbCfCJLLLFFHHjFbFn@l@nCbCdB|AnCzBdCpBnA~@v@j@xAhA`C`BtBxAlCfBhBhAr@`@t@d@f@Xd@XnAp@rC|Ap@^xAr@~Av@xB`AtB|@xB|@vAh@|Aj@`@N`@NnC|@xDjA|Bp@`Dz@jFrAl@Nl@NfBb@vM~Cv@P@@VFvA\\XH^HD@TFtDz@ZHdAVZHvBl@~Br@vAd@xBv@rAf@r@\\^Pn@XlB`AzAx@tAx@zAbATN~@p@dBpAvBfBjAdAp@n@`A|@~@`Ax@~@DDFDDDrClDPVfAxAlAfBlAhBtBhD`BrChAnBjAxBbDnGb@z@bEhIl@jAn@nApB`EfBdDlBjDhB`Dd@~@hBnCfCvDlBnC`@p@tAhB|C`ElCdDhBvBpCzCjCrClEhE`@^BBd@`@nJ~HVRb@Z|@t@xCvBt@f@\\XRPtE|CdC|AjAv@rD`CbBhA@?l@b@RJt@d@nCpB`D|BnB|AxAlAjA`AjB~AlAdAjD|Ct@p@hDzCxDhDFF^ZzBnBv@r@NNDDNLxBnB\\ZNLDBZZx@p@jAfAfJjIjFxEb@^b@`@rCfC|JrI`HvFpB|AxDrCjBrAtDbCd@ZdAn@lBhAxBnAdDfBxBfA`Bv@`DvA|CnA~An@zAh@|Aj@ZJZJjA`@pA`@vBl@`Cn@nAZ`ARpAXr@LnARpCb@~C^~AL@?hBNjBHzBFxABbA@pA?tCEhCIL?`@A@A`BIl@GrAKnBShBSVEdBUtASxCg@tAUzCi@JC~AYlAUrDo@`Di@tEq@dDa@n@Gn@GlCUdBIbDOlACnCClBAfA@nA@`CH~BHj@B\\B\\BnCTjAJtBTfBT|@LtBX|@NhBZhBZnAVx@PF@vEdAvA\\lAZfD|@pBl@zC`AzBv@~DzAnCdArCnAnBz@t@\\tCtAjAj@`@TPHPHpAp@h@ZfAh@r@^r@`@dAl@fAl@p@^~A~@jAp@dAn@rCbBRLPJv@d@v@d@fQjKr@b@`Aj@j@Zh@ZjC|Av@d@`@RFDzAt@@@lAj@rAf@nAd@~@TtAVt@HV@J@pAFv@?tAGZEd@EbASJCTGZIFCfAa@tBeAHG~@o@TOb@_@NKNOfAaA~@_ApC}CbAiATWBERUfAsAp@{@"
                     },
                     "start_location" : {
                        "lat" : 46.53917490000001,
                        "lng" : 6.556916600000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1601
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 46.2453644,
                        "lng" : 6.1281934
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork to stay on \u003cb\u003eA1\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE62\u003c/b\u003e, follow signs for \u003cb\u003eFrance\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGenève-La Praille\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAéroport\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGd-Saconnex\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "wgiyGyqmd@XYTYdAkAhBoBXW~@cAn@g@JK\\[t@_@TMd@OXGXEXEL?ZAf@?b@BVDv@PTFZLXNVN\\Xd@^PRXZ^j@bAjBLZ\\x@Tl@FR@?Vz@Z`A`AhD`@tAlClJ^lADLVz@^pAlApDj@xANXR^Xh@NZZd@b@n@PZRXNTV`@h@t@T\\@@Zd@PT"
                     },
                     "start_location" : {
                        "lat" : 46.2554772,
                        "lng" : 6.136767799999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 116
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 46.2446112,
                        "lng" : 6.1271588
                     },
                     "html_instructions" : "Take exit \u003cb\u003e7-Gd-Saconnex\u003c/b\u003e toward \u003cb\u003eGd-Saconnex\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eFerney\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ohgyGe|kd@BNBFDFNTt@bABB|@nA"
                     },
                     "start_location" : {
                        "lat" : 46.2453644,
                        "lng" : 6.1281934
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 595
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 46.2406028,
                        "lng" : 6.1220478
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue toward \u003cb\u003eRte des Batailleux\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "ycgyGwukd@`ApABDDDFHDFNVHJJLRZlC|D`C|C~ApBxArBtA~ADFl@~@JNl@dA"
                     },
                     "start_location" : {
                        "lat" : 46.2446112,
                        "lng" : 6.1271588
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 402
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 46.237874,
                        "lng" : 6.118617899999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eRte des Batailleux\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wjfyGyujd@bAnAHL^j@JNV`@FHZb@@@TZ@BV^T\\j@x@r@`Ar@~@V\\t@~@BD|@bA"
                     },
                     "start_location" : {
                        "lat" : 46.2406028,
                        "lng" : 6.1220478
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 861
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 46.2321858,
                        "lng" : 6.1110717
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eRte des Batailleux\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "uyeyGk`jd@fAjAl@p@FFzBpC|@hA~@hAd@h@JLLVLV`A|Aj@x@RZh@~@bA~AXd@p@jA|@zAXd@DJb@t@DFb@r@NXPVZX`@x@d@v@NZLTLLJFBD"
                     },
                     "start_location" : {
                        "lat" : 46.237874,
                        "lng" : 6.118617899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5 m",
                        "value" : 5
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 46.2321535,
                        "lng" : 6.111034900000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRte de l'Aéroport\u003c/b\u003e",
                     "polyline" : {
                        "points" : "evdyGeqhd@FF"
                     },
                     "start_location" : {
                        "lat" : 46.2321858,
                        "lng" : 6.1110717
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "776 km",
                  "value" : 776315
               },
               "duration" : {
                  "text" : "12 hours 59 mins",
                  "value" : 46722
               },
               "end_address" : "Triu Funtanella, 20160 Vico, France",
               "end_location" : {
                  "lat" : 42.11504,
                  "lng" : 8.6521536
               },
               "start_address" : "Geneva Airport (GVA), Rte de l'Aéroport 21, 1215 Le Grand-Saconnex, Switzerland",
               "start_location" : {
                  "lat" : 46.2321535,
                  "lng" : 6.111034900000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "65 m",
                        "value" : 65
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 46.2316133,
                        "lng" : 6.1109084
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eRte de l'Aéroport\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}udyG}phd@VZ^F\\ETE"
                     },
                     "start_location" : {
                        "lat" : 46.2321535,
                        "lng" : 6.111034900000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 100
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 46.2308604,
                        "lng" : 6.110289499999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eRte de l'Aéroport\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "qrdyGephd@L?LAf@Vb@f@RZX`@"
                     },
                     "start_location" : {
                        "lat" : 46.2316133,
                        "lng" : 6.1109084
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 211
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 46.229532,
                        "lng" : 6.1083276
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eRte de Pré-Bois\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "{mdyGilhd@\\d@FN@B@?FPBF@@BHDFdAfBjAjBl@`AFH"
                     },
                     "start_location" : {
                        "lat" : 46.2308604,
                        "lng" : 6.110289499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 141
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 46.22919659999999,
                        "lng" : 6.106641499999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eRte de Pré-Bois\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "qedyGa`hd@Rf@JVHPF`@D`@@X?TAp@Cd@BXHX"
                     },
                     "start_location" : {
                        "lat" : 46.229532,
                        "lng" : 6.1083276
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1064
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 46.2222107,
                        "lng" : 6.0973513
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eRte de Pré-Bois\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ocdyGougd@R`@R`@\\d@NR^h@b@t@PXBFDLVh@|@zBn@`BLXP\\BFT`@lAhBHLDFNTHXP^b@t@Xh@JLh@|@t@dA^f@RTZ^HJ^`@r@z@\\^l@t@NPX^\\b@JLDDnAxAhApABDRRf@l@l@n@JHJHh@n@DBDB`@N"
                     },
                     "start_location" : {
                        "lat" : 46.22919659999999,
                        "lng" : 6.106641499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 218
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 46.22141480000001,
                        "lng" : 6.0991843
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto the ramp to \u003cb\u003eGenève\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "ywbyGm{ed@PLRLTJHFHDF[Ns@Dc@LkAPcBBYDg@B_@B]"
                     },
                     "start_location" : {
                        "lat" : 46.2222107,
                        "lng" : 6.0973513
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "16 m",
                        "value" : 16
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 46.22136219999999,
                        "lng" : 6.0993729
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eRte de Meyrin\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "yrbyG{ffd@He@"
                     },
                     "start_location" : {
                        "lat" : 46.22141480000001,
                        "lng" : 6.0991843
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.6 km",
                        "value" : 9600
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 400
                     },
                     "end_location" : {
                        "lat" : 46.1501203,
                        "lng" : 6.0956351
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eA1\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE62\u003c/b\u003e toward \u003cb\u003eA1a\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eFrance\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGenève-La Praille\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePerly\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSt-Julien\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "orbyGahfd@PQBADCD?F?FBHBHDLFFBF@F@B?J?HCFAHEHGLMPWJQ\\e@HKFEFGLGFAHAJ?H@B?PAd@RXJh@Tt@^bAh@b@Tf@Zn@b@BBXRLHNNp@n@FJDFX`@HJRX\\n@f@x@NZ\\x@h@z@L^FNHXH\\J^HZFXNr@bBtHDP`@rBPt@Ln@Ll@@HZvAVlAz@xD@FNn@n@|Cb@tBBHHd@Jf@@Fh@~B`@jBLn@J`@RbAxB~Jp@fDDL@BVnA@DNl@Pl@`AvDNh@?B`AhEDNPr@Vt@Rh@Rj@FLx@~B`@t@DH@@nA|BTZHHLRp@x@DFz@dAPPB@FF`BxAZZJJt@b@h@\\`@VPDLDvCx@`@LLDx@FzBPb@?|BEh@C~@Mp@Mv@O|@WHCJE`C{@x@[r@Y^SVMTKpEuB~B{@vCy@bBWzAQnBUjCIfBAlCBtB@jB?lAA|AA|AMfCWhB[TGj@Mn@Oz@W|Bu@~Ao@j@YBAj@YbAi@~AaArCmBrBuAhCaBDCtA{@`D_B|Aq@x@[ZKVG~@_@^K|Aa@hCs@HCXG`@Kn@OzA_@dAUb@KhBc@~Bq@nCs@jDoAv@c@hEcCdCkBvAmA\\[\\Y@?Z_@\\]Z]vDaEhEeFtDsEx@cAfAuAlAuAZ]DGJONMLQrI_K|KqM`@e@|CqDDEHMJKLOb@g@v@aAv@y@l@o@h@g@j@k@n@m@rAcA^WVQ^Ub@Wf@Sf@UTKr@Yj@Sr@Uz@WFAx@Od@I`@G\\E`@CTC`@AdAEx@?h@@T@F?`@@v@Fn@Ff@Fl@JPBD@ZH`@Hf@N`@JVHDB^L^NPHTJXLVLNJl@Zp@^FDlAx@DBj@`@DD^Vx@l@x@p@lA`Az@p@ZTx@n@rA`AtAbANJdAp@\\TZP^TXP@?x@d@t@\\TLNJJHNLFFFFXXHHRRHHFDHDJFDBHB"
                     },
                     "start_location" : {
                        "lat" : 46.22136219999999,
                        "lng" : 6.0993729
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 162
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 46.1486905,
                        "lng" : 6.0955062
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eA1\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering France\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "gutxGwped@NJVH`@HRFJBF@V?RAPAt@Mv@A"
                     },
                     "start_location" : {
                        "lat" : 46.1501203,
                        "lng" : 6.0956351
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1163
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 92
                     },
                     "end_location" : {
                        "lat" : 46.1387416,
                        "lng" : 6.099322
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eA41\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "iltxG}oed@X?H?J?R@L@T@D@d@DnBRB?^LTA`@A`@EjAYPCHAFCFCDELIFOh@c@^[LITKNGTKr@WhBq@xAk@fBo@d@QFCNGNGRIRGz@[TIb@O^Mv@Y?AhAa@`Bo@z@[n@Wn@S`@Qb@Od@UdAa@FCPGBAf@Qv@["
                     },
                     "start_location" : {
                        "lat" : 46.1486905,
                        "lng" : 6.0955062
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 207
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 46.1369469,
                        "lng" : 6.0999007
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eA40\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "cnrxGwgfd@RHz@WDCRG@Ab@MDCTGTGXKREJEFAPEFCFAHCPC@?DALCLA"
                     },
                     "start_location" : {
                        "lat" : 46.1387416,
                        "lng" : 6.099322
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "23.3 km",
                        "value" : 23334
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 861
                     },
                     "end_location" : {
                        "lat" : 46.1239177,
                        "lng" : 6.327598
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eA40\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTurin\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMilan\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChamonix-Mont Blanc\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAnnemasse\u003c/b\u003e and merge onto \u003cb\u003eA40\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "}brxGkkfd@LGJALALAN?JATAL?p@ARA^?HAD?F?NA@A@?B?DAFAFAHALALCZGTEHAREVENAXAT?Z@H?N@p@FF?`@FH@x@N`@HZFD@RFNDb@NZJB@NHPFBBTJDBRLFDBBDBHJHJ@BDHFLBL@DBF@NBP?D?LARAN?@CNAHELCDADEFCDEFGFA@GDKFIBC?K@M@KAICGCGEAAIGIIIKAAIUGQCEMe@?AMq@Km@OaAG_@AAAMCKCSACAMIa@AMG]?AACCKG_@?CIa@GYCOCIG]G[E[Ia@?AMO[yBOmAOgAYqBAIG_@MaAK{@EWMcAOcAMaAG_@Im@Ko@E_@Ga@E_@G_@M}@Ge@M{@Gg@Im@Ii@Ge@Ii@Io@Im@CYG]E[E]M_AGc@E[Ie@UiBE]E]K{@Gg@Im@E]Eg@Gc@AQE]?EEg@Gm@Ec@C]AYCWCo@GoAImACo@GaAGaAEiAKiCCk@Ei@Eo@Gs@Ca@Ea@C[Ee@C]E_@I_AI{@CUE_@E_@E_@Ea@Ea@Ga@E_@E]E[E_@Ea@Gc@C]Ga@Ea@C]K_AEa@Ca@I{@AOAUEa@A[Cc@G_AAa@GaAAe@C_@C{@Ck@Ac@E_AEcAA_@Co@C[A]Eq@E_ACe@Ek@Ek@Eg@AOOaBI}@Gk@CYK}@Ky@Gi@Ec@AGGa@AKCSEc@EYGg@Ee@E[C_@CSCYE_@C_@Ec@C]Ce@Ec@A_@Ce@A[Cc@A[Ak@?QAa@A[Aq@AcAAa@?S?_@AW?e@Ac@A}@?QAw@Ac@Ak@?OAe@?KCq@Ac@AE?UASAQCa@Cc@CQAMC[Ee@Ii@EYEYG_@Ia@CKEMESCKK[Ma@K[Qg@IQGQCEACO[CGKQMUQYOWSWOSSUAAQSQQUSQQUSGGKGUQSOSOUOSQUOUOSOUMSOUQUMSOUQSMUQSOSOQOSOUQSSQOAASQSSQQSUQSSUQSQWQSACOSQWKMEGQWOWQWACMSQUOYAAOUOWQWMUCEOUMSCCIOCCS[OWOSCC_@k@QUOSQSEEMOCEOOQSUUSQQQWSSOSOAAUOUOUOSMUMUMUMUMMIICSMUMWMWMQMSKECSMSMUQUOSQSOQQSQCCQQOQCCOSAAOSEIGIACQWQ[MUKUCEKWMYAEKWM]IW?AK]K]I]I_@AKEQG_@I_@G_@E]G_@Ea@E]G_@Ea@Ea@E_@E_@E]E_@?EEYEa@E_@Ga@E]AEAQCMG_@G_@G]G]G_@AGI_@I]G[CGESCII[I]K[K_@I[K]KYK_@K]M_@K[K]K[M]K]CIIWIUK[K]CEGUOg@KYEM?AA?CI[aAEMMe@GQWy@K]a@sAQq@Sq@EQI[I]Uy@I]I]I]Qw@Ia@G]I_@G]EWAEG]I_@CSCMG[Gg@COIk@G]Ky@E_@E_@CSAKCOAOE_@E_@C_@Iy@AEC_@Ca@AOGo@A[Ec@Ca@Ck@Cg@AUEq@Cg@Aa@C_@?AGaB?EAYGcBCaAA_@Ca@CaAA_@EaAAc@C_AKgCEmAA_@Cs@A_@Cc@A[A]E{@EcAEe@A[GgAAIEm@Ei@Ec@I{@?CCMAKCW?GAECWGc@K}@E_@G]E]Ic@E]G[G_@G_@I]G]I]Kc@Ia@GYI[GSAAMg@Mc@IYY}@IWQi@M[M[M]KYSc@IUUi@Qa@{BeFoBmEMYMWgEmJg@kAg@qA[w@c@qAc@qAa@uAUw@W{@Uy@Wy@Uy@Uw@c@sAe@oAa@cACIGOO[O[Q_@Q]EIWe@AAWe@U_@[g@OWEEMUa@k@}A_CW]_@k@OWQY[i@OWIOS_@Q[MWMWO]KSMYISYs@M_@KYOa@IWGQGSM]K]Ss@Sy@Mg@EQGYKa@Kg@Os@Ia@Mk@Kk@WoAQaAc@}B]cBa@uBESSeAUiAMo@a@yBu@{D_@mB_@eB]{AS}@_@}Ag@oBWcAa@uAg@_BM_@a@kAKWYy@w@uBSg@CI_@aAk@{AUo@M]CGu@sBg@sAuBwF]_AUk@CEWq@Ys@Yq@]y@O]KUKWKUOYMYOW]q@OYMUOWQYa@q@MSKOQWIKY_@SWGGW[GGKKGGEEIKOOIGOO_@[CEGEGEIGIEIG]UA?SMGEEAECMGAAECGCGCAAKEMGGCGCOGCAICSIe@OUGUGc@Mc@Ke@MKCEAgAUUGGAGCOEMCOCSGUGUEUGUGUGUEUGUIGAICWMQIOIGEUSA?MMMMMMMSYa@Q]MWIWCEMa@Ok@Kq@EWE_@Gq@Ak@Aa@@_@@_@@c@B]D[BSJs@Hk@Ni@Jc@FWJc@HYH]Je@p@kCVaANm@Ja@X_ARs@JSl@iBj@wAN_@Xq@LUn@uAZi@Zi@@CR[V_@b@o@j@u@?APSHKZ_@\\]TUZ[NMNORQHG@?`Ay@fBuAd@_@f@c@TQLKZ[\\YFIb@c@j@m@LQHKNQTWRYZa@BEJM^g@RYLSTYZc@T[d@m@RYNQb@g@X]NOVYf@g@NMVWTQTSNK`@]DC`@Yf@_@d@YLIt@g@z@g@NKJIl@_@`Ao@VQTQXSVSPMVSTUl@g@XYRSRSJK^c@BC^a@@C`@g@DIRYp@aAPY\\i@R_@@ET_@BGLSDI?ARc@^{@@Cd@iABGTo@HQVw@HYZaA`@wABMFUNm@R}@Pw@Ha@b@}BToA`@_Cd@kCDY^wBVyAJo@BKZiBF_@DYBMDUHa@@GDU@KDU@EDU@IDS@G@KDQ?AF]F_@F[BKF_@F]DW@IF[Hc@F]BMBUDQFa@F]@CD[Lm@F]F_@DYHc@BSF]F[Ha@Jk@Hg@DUDWF[BMDW@ED[F]BKBQBIBQZeBJ[P_ABKJo@Ha@P}@@GNw@F]?AP}@H]F]Jk@FWPy@BQLk@@GFYH]F]BKDSF[Jc@P}@H_@F[@CF[H_@FYJa@BKDUH]Jg@Nw@\\}A^kBb@qB\\gBBIBKFWzAgH`AmEbAwELi@Lk@jBuI~@gEr@cDZ{Ad@uB`BqH\\aBTeA@GLo@?AZwA^qBh@yC`@{Bt@_EZ_BBSH_@X_BH_@^oB^uBFYt@_EhAiGFYTsAHc@Hi@Lq@?AReARcALq@BMF]`AsFDYjAgFd@uBT{AVqAHe@\\qBBOrAgKFa@~@wGp@oEBKFe@@GVwAP{@DUN}@N{@F_@P{@P_AJ_@RaAPy@Li@BKFY@GJa@FUJ]H_@J[H_@Tw@V{@Tw@J[Vs@J_@BGRk@JYHWDIL]BKTk@JY@AJWPc@Re@L[Xq@FOJUHOFO`@{@BIJUP[LWLWN[NWNYLUHOVc@\\k@NYLSR[NULUBCT]n@}@\\i@RWNSLQLQV[PSZa@PU`@c@PULOTUBEd@g@VW^_@NMj@k@TSNMPOLMDCLMVSPQh@c@h@c@RO\\WVSROVS`@Wh@]TORO^S\\Sd@Wl@]NIZOHGJE\\QTK`@ORKNGTKPGPId@QnAe@p@Un@UDAZKVIVIHC^M`@MHCTGb@M@AZIl@QRGPGl@SNEDAr@Sd@Or@UPEXKTITGRIVIVIVIVKZKTKhAe@b@SPINGVOz@c@DCPKRMHE^Ub@YVOROTQROl@e@b@]XSb@]TQXUPOj@e@DEdA}@j@g@zAmALMt@k@JK~@w@POROf@a@TQtBaB`Au@pA_ARO\\SDEb@YJKLIFEJG\\Uv@i@j@_@XSHEVOb@YTQd@Yn@c@JGFETM^W\\UnAw@p@e@x@i@hAy@"
                     },
                     "start_location" : {
                        "lat" : 46.1369469,
                        "lng" : 6.0999007
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "25.2 km",
                        "value" : 25178
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 829
                     },
                     "end_location" : {
                        "lat" : 46.04646049999999,
                        "lng" : 6.5982091
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eA40\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "oqoxGozre@tByAt@k@BCrAaAVUfA{@@AVUHGRQXU?ATQLKh@c@PQRQTSFGHIv@s@RQBCd@c@|@{@JK~@_AJKx@y@p@u@Z]d@g@RSNQlAsA`AiARWDEZ_@v@_ABEb@k@lA{AX_@FIdB{Bd@m@h@s@~@mAr@cA^e@V[p@}@Za@`BqBRUTYRU^e@`@c@r@y@DGLMDEnAwA`AaA^c@`AcAf@e@hAgAx@y@x@u@xAuArIcH\\Yf@a@pAaAJIBCZWTOLIXSNKPMFERORORMh@_@NKXSNKXQNKRO^WxDkC\\Wh@]RORMTORORM|@o@TMpA}@ROl@a@TORMlAy@ROl@c@NKBAPKROh@]dBmATMVQPMRMf@_@ROTOROROROTQROROROTQRORORQRQRORQRORQRQXSNO@ARQRQRQRORSRONMRQRQPQRSRQRQRQd@g@ROPSRQTS?AjAkARSPQRSPQRSPSPSPSRSPQPSRSPSPUPQ?Ad@g@PUPSPSPSRUPSPUPSPUPUPUPSPSPUPSPUPUNUPSPUPUNUPSPUPURYLQPWPUNSPWPUNUJMT_@`@m@PUT_@Ze@PUNW~@yAn@cAT]`@o@rA{BLUP[NYNW^o@LYNWNWR]NYLWNWLWNYNYLWNWN[\\o@Zq@P]NWLWNYLWN[LWNYNWLYNYNY\\q@LYNWh@gAP]LWJU`@w@LU@ALYDK@AFKLYNWLY^q@l@kALYNWLW^s@NWLWNYNWNWLYNWNWNYNUNYNUNWHMDIPYNWHM`@q@R[PW`@k@PWNSPWPUNSb@m@PSPUPUPUPUPSLOV[PSPSPSPSPSRSPSJMDERSPSFGNQPQPQPSBCLM@APSRSRSPQd@e@PSLMFEFGFIHGBCFGDEBEFGDCDGFGFEBEDE@?DGDEDEDEDEDEFGBC@ADEFEDEBEDEDEFGDEFGDEDEDEFGDEDEDEFGDEFGDEBCDE@ADEDEFG@ADE@CBADEHILMDGFEDEFGBC@CFGJIDEPQJMz@y@DGBCFGDEDEDEFGzA_B|@_ARSd@g@\\_@FIPQPSRUDEJMX]`@e@p@u@TWRULOTWPS^g@BC^e@PST[p@{@TWNU`@k@NS`@q@R]d@s@JQp@gANUJOT]FM\\i@NUXe@DGLUnAcCp@sAJS`AoBBGz@qBZy@Pa@Pc@JWXs@h@wATs@l@_BL[L]L]f@yA^qAHULg@H[hAcEJc@Pu@P}@Lm@He@Lq@Lq@Hc@F_@VsAFa@ZyBRqABOL}@Ju@Js@DYFi@@K\\iCHm@De@Fg@?GD[Hy@JkABg@Dc@?ED_@HwADk@@MBc@Dm@Bc@B[FoADy@By@Ba@By@@Y@_@@e@@YDiBBuB?M@e@@oB@wA?I?g@?S?e@?o@Ao@CwB?}@Aa@C_AC}AAe@Cs@EoAE_AAKCs@?CEcAKaBAWCi@IkAIgAG{@ACIgAAMEa@OeBWeCOsACIK_AS_BS}AIm@EUIk@Kq@Ga@Mw@Ga@O}@OaAE[ACG_@Y{A_@uB{@wEEQUkAe@cCI]G[Ia@Q{@Q{@AIa@qBOs@a@oBOu@c@qBk@qCCKk@qCw@{D}CgOYuACSSaAS_AUkAI_@Mq@Ki@Y}AOw@G][cBAGY{AUqAYeB]yBU}AG_@U_BE[Gg@QmAMiAS_BQaBU}BC[E_@IgAIcA[}EI_BGeAG}@EgAEs@Aw@GyACaBE}BAu@C{A?u@?O?c@A]?y@?u@@uA?Q?o@?c@@a@?_@?Y@g@?a@@U?G?E@]?e@@]@UBmA?SBm@@a@@a@?S@MDaB@_@@q@H_CDgA@UJiCFaBJ{BFiABs@Ba@?CHuBL{BBu@FeAD_AFeABq@Di@Bi@@YDw@Bo@@UDaAB_@DaAF_ADmAH}AD}@D}@Be@Ds@FqAHeBFgA@O@e@L{BHiBJqBBo@FkABi@@GF}AB_@?E@MDs@LgCTiDHoAHsARkCPeBRcCD]Fc@JaAFe@BYF]^qCHk@Jq@?EXeBHa@N}@F_@F]F_@b@cCLu@H_@F]Hc@D[H]F_@F]F_@H]F_@F]@GNw@N{@F_@H_@F]F]Fa@\\mBTmAF]F]F_@H_@F]F_@F_@F_@F]F]Fa@D_@F]?AFa@D[D]LeA\\cE@ODkADcA@_@@a@@]Bq@?OD{C?_@?Q?_@?a@Aa@A_@Aa@Ak@AUAa@C_@Ce@A[C]C_@AGC[Ca@Ea@C_@I{@OsAGo@AGUwB_AaIE_@ScBYaCEe@w@mGWaCKaACUWoBI{@I_AKiAOeBMaBKeBGaAAe@AYKeCEqAK_EAcACcB?eAAcA?cA?a@Aa@?cA?a@?a@?eB@cA?cB?a@@cA?cA@eB?cA@cB?C?cB?cA@cA?_@?eBAiD?cB?eAAcCAi@CaDKoGMaFIeD?SAAA]?C?O?AUoGGwACu@?IGyACm@IyBE_BIcBUuGA[MmDMqDGkBQcIAm@Cm@?WI}CKiGE}CCuCCmEAuC?}D?_@@E?_@@aA?e@DcB?YHeE?K?GLeD?O?SDg@HmADy@F{@Fs@HaAZsC`@uDXeCL_AJs@NeAPaAPcAD[p@wDR_ATcABI@ILc@\\wAPs@Li@Pq@Pi@Po@Ng@b@wA@GTo@DKDMPe@Pk@\\_Ah@uAh@oA@G~@qBl@oATg@BEb@_ATe@FKVe@P[r@uAXg@R]Vc@Ve@Xe@?ABER]@ABEDIbAgBx@uA|@yA`A}A|@{ABGl@cAXk@d@{@xAsCt@aBl@sAp@aB`@aAhAgDz@sC@APs@|@oDr@aDNm@Nq@VgAz@yDdA{Dl@mBLc@\\}@Xu@p@aBTi@~@yB@A\\y@Xq@\\{@b@iABGVq@Lc@DKFS@A\\iAHYJe@Nk@Jg@Nw@Lo@Hi@@EFa@DYFg@BO?CFg@Fi@B]De@JeAFm@NgBDi@Jy@Hs@Js@Hi@Jo@Jg@Ha@H_@Ni@FULi@L]HWBIDOXu@JWXk@JSLWJSNYLUNWJQBENUTYLSHILODIHKNORUFEBCJMPOFGRQ@AJITQRQFELIPM@A|@m@BAZUROJGLKPMNMPOROFGDEPQTSJMDETU@CPSHKHKPU@APWDGJMLSv@wABEFKZm@hAqC`@aARg@Rm@Lc@Pk@Lc@XaADSH[?AFQBOBG?ABKFWBGBOR{@Py@Nq@Lo@P}@R_AN{@Ny@Hc@@C@E?AJu@Hc@?CF]BM@E@MHc@Hg@Lw@Fc@F_@Fc@DUN_ARuA@ALy@DWHg@Fe@BQF]^}BJc@Z{BHk@BUDW?ERsAL}@Jq@Fg@BUB[B]RqB"
                     },
                     "start_location" : {
                        "lat" : 46.1239177,
                        "lng" : 6.327598
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "19.7 km",
                        "value" : 19664
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 657
                     },
                     "end_location" : {
                        "lat" : 45.9102587,
                        "lng" : 6.712451799999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eA40\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "km`xGyugg@Fg@Fo@H_APsBB[XiCD_@@CDYR}ABMJm@VsATgALe@Tw@XaAf@wA`@{@BGZo@JSNUXi@FIPYXa@Za@RWRUFI\\]NMv@s@~@s@NIfAo@~@a@bA_@f@MJERGz@U^IXIx@SHCv@S`@KVGJE`@MTI`A]JEDAJEtAo@^SJGTMf@]FCLK@?x@k@PQNKl@g@PMPQ\\[FGHIVU^_@FGz@{@ZYRSHK@?PQZY@AJKPQDCVW\\YJKNMnAeALKFEb@]XS|@k@j@_@NIj@]fAk@`@UZOTIPI^Q~@_@LGRGNGHEbA_@h@Qb@MLGf@OfBi@FClBi@DA`AYvAa@xA_@rA_@pCu@pBm@|@Ul@SRGTG~@YvAe@lAa@nAc@BA@?bBm@BArAg@x@[@AXMn@YRG`@S`@Q^Sd@Sd@SVOVIz@e@p@]HE^S`By@FERKz@e@bB_Ap@_@@Az@g@dBcAbCwAj@]DCtBmAdAm@|BsAdAm@~AaA`@U~@k@`Ak@dBcAxAy@^UDCXQr@a@fAo@f@[@?`@WNIRKJIdEaChEeCRK^SdAm@h@Y~@e@tAq@`Ac@hBs@rBu@pBm@n@OpA[tBc@zAWxAU`@GfAMdAM`@EhAM~@K`D]TCzAQVCTCdBSPAVCrAO\\ErBUdAKfAM`@Ex@IjBSt@IhAMNAr@IPC^Ef@E@AbAId@GTCVCbBSbBQDA~@Ij@E~AKJAdAID?xBIN?`BCn@?zA@dADV@n@Br@DR@zBRJ@bAJhANz@L\\Df@HjAR`APXDxAXz@N`@Fb@HdBXpB\\xARVDXDn@FH@^Bn@Dn@BR@V@\\@\\@j@@h@?F?L?P?R?hACxAENAdAGpAGXAzAKd@Cf@Ch@Eh@Cj@Cj@Ej@EzAGT?@?Z?@?D?V?@?j@@h@@h@@n@@^Bd@Bn@Dl@Fn@FTBVB`ANdAPl@LxAXdARzAXbARVDbAThARVDRBbAPb@Ft@JvBRT@J@H@TBP@R@V@L@N?F?N@V@P?R?\\?^?b@?^ANAh@E^CZCDAh@Gh@Ij@ITGPC\\IVGPGPEXKHALEVKh@S^QXKRITITMFCFCZQ~@o@NKFGj@a@x@o@x@s@b@_@RQLMBATS@A^_@BCFGXYFELMf@g@TUj@m@rAoA~@_An@q@HGb@a@TU\\[d@a@|@u@TSROb@]bAs@VQb@Yb@WdAm@x@a@h@Y`Ac@dAe@`A_@`A[~@[t@WdA[rA]rA[v@St@QdAWfAU|A]~A[fAWnBa@h@KREdAU^I@Az@Ot@OTEt@OPCvAUhBY`@GzAUNAt@KtASn@IXEr@Iv@M`@G@?`@Gx@M`@Gd@I^G`@Ib@Kb@K`@K^KVIVIl@SXMNGl@Wz@c@l@[h@]TOz@o@d@]z@q@\\WVS`@]XU\\Y\\WVSn@e@r@c@z@i@JGDCNINId@WfB}@zCyA`Ae@rCuA`@Ud@UnDgBtCuAdAi@f@UzC{AhAk@NI`Ae@`CmAxC{AtAu@bAk@jAs@n@a@tAaAh@c@lAaAJMZWd@c@`@a@f@i@BCh@m@LM`@i@RWd@k@NURW`@o@\\k@b@u@Zk@P]j@mA\\u@\\w@f@oAd@qAL_@b@qATu@J_@X}@j@sBTy@V_A^uAT}@T{@^wA^yAT{@XeAT_ATy@Rw@Ja@J]TaAPo@Ty@H[Jc@Le@FSFUBKNk@z@cDHY~@oDDMH_@f@oBp@cClFiR|AaFvCgJl@iB^kARe@DMBMBCHYL]J]J[HU@EJ]L[H[HSBIJ]J[HU@GJ[@EHWJ[J]@EPm@@EJ]J]J[H]J]H[@AH[BMFQH]H]J]H]?AH[?AH[H_@H]H]H_@H]H]H_@F]Ha@F[H_@F_@H]F_@DW@EH_@F_@H_@D[DQBOF_@@KBI@I@IBI@KDQ@KBK@ILu@@KHi@DSF_@DSDUTwAh@oD?AXaBBOd@}CP_AVwAZcBPw@DUBKZ{APu@XoAJ_@Lk@Rq@DSV_A\\kAx@kCx@gCRm@HYHWv@}Bd@wAx@iCPi@@Ep@wBX_AFUBIJ[H]Ru@Je@HYH_@?APy@H]F_@H]Fa@F[F_@@EBQDYBODe@Hk@Da@B[Hm@B_@Dq@Dg@@c@F_A?KF}A?ADgB?A?C?W@U@sAByB?y@@iA?kA@q@@uABkA@{@BkC@YBcAFmCH}BB_@BaADy@Bo@?U@U@K?E@K@_@T_FD{@LuC@OBgEAkCGcBIeACQQeASs@]}@MW"
                     },
                     "start_location" : {
                        "lat" : 46.04646049999999,
                        "lng" : 6.5982091
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "15.3 km",
                        "value" : 15340
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 731
                     },
                     "end_location" : {
                        "lat" : 45.9083131,
                        "lng" : 6.8486193
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eN205\u003c/b\u003e",
                     "polyline" : {
                        "points" : "czewGy_~g@We@S[a@k@{@eAY[KK?Ag@i@i@o@QQWYo@w@q@w@e@i@u@aAk@}@_@s@]o@Qa@s@aBKSa@gAOc@W{@a@uACMGUI]IYKa@U}@Sy@S}@I]G]K_@I]I]Uy@K]K]Qe@GQIWO[O]}@aBe@u@IKeBsB]a@g@m@]_@e@g@U[MQMQa@m@a@q@y@uAO][m@c@}@e@_AUc@Uc@EICGEGQ[S_@U]QYQUOQMOY]QOOOMMWUSQ]Yc@a@w@k@SQUQECc@c@UWk@s@k@u@g@q@Y]U]MQOSSWSUQO]UWO[Q[Oa@Q_@Ms@W_A]wAm@_@SYQe@Yg@a@WQUQc@_@_@]][][a@YKKQMUOYQk@Yk@W{@[YGYEm@IKFWNIDSLe@\\aAx@k@Re@TSJUJSFSFUFg@Hi@@]A[AWEc@KSG_@Oc@U[UACYYCEUYMQW_@OYOYM[KYK]?AK]I_@AGCSE[AGE[C]Cc@Ae@AY?e@@_@@e@BS?GDc@@KFe@Ha@@MFWHYFS@E@C@E@CBEFQBGHSJQDKLUPUJOX_@TWZ]PWNSJOFKJQPYDKHOJW?A@??AL[J[~AcFbA_DPk@Rk@\\gAX{@bA_D@CPi@Ja@J[J]H[Li@H_@DY^qBDUJk@P}@XaBHa@F]F]F_@Bc@@I@QB_@?ABa@@a@@M@Y?O@K@EBY@GD_@H]DSDQDQFQDIDQHMHOZk@JOHMHSR_@L]DQFQH_@DSDSD[F_@@Q@OB]@_@@_@@[@_@?[@g@?a@?I?W?a@?e@A_@Ae@Ca@GcA?CC_@E_@GaAE_@C_@KcAE_@Ea@?AI_AEa@Ca@CYGe@Ca@Ea@C_@Ca@Ca@A_@A_@?_@?c@@]@a@Ba@B_@Fu@He@DYDUFU?CH[DMHYL[Na@Xk@Zg@JQPWTYPUTULMTSNONMPM\\SPITKTIXKPGXKRGVGTGTGXGFALCVETERELAv@Od@Gn@GJAx@GVANAHAb@CJ?f@EVAVAFANATALA@?F?VCRAB?RAdAGTAD?d@Et@El@CRAVCVAPADATAVCTETEVIVIHCpAg@|@]DAPETEVGREl@MBA@?PEPCBAXGBANENGBAVKTKRMROJIFGRQ?APSPST_@JOLWLYPe@DKLa@FUJg@F]Fc@B[HaABc@B[?EH_B@c@FyA@K@_@B_@Bc@D]B_@B[@CDc@D[DSF]F]No@Nm@DKDMFQBIJWBGHUJSHSDKNWNYDGHMFKpA_B\\a@JKZY|@w@Z[HGPQJIFGRSJKXUPORQJG\\S@APIb@QNCFCPELC^EP?NA@?L@R@TBp@L`AP@@^Hj@Nd@NPDPDXDTBX@b@A@?VANCJARC`@MDAl@SJETMFEJIVWJKNQX_@PW\\g@PWP]FKJQFKBC@C@AFIBE@CHKBEDEDEDGDEDEBEFEHIDCPMh@_@h@Y@A\\SBCZU@AXUb@_@BAVS^YBA\\W@?NIJIZSFENIPMNMTOTQDGXSz@}@NO\\c@`@i@HIRYPUT[NSLQTWHI|@qA|AeBbA_A~@y@PMLK\\Yv@o@~@s@BE|AmADCVUHETSDC`@]ZWTQ|@{@z@y@@?r@o@DGzAwA|@{@h@i@XY`@a@d@e@XWXYbAaAXYTUPSPQNQPSVYPUPSNSRUV[HOBERWR[V_@V_@NU@C|AwCT[LYNYLYJS@C?A@ALYJU@CJS@AL[@AVm@BGLYLYFODIL[JYBG@AFQJ[BEHWH[DOHWF[FWLi@Hk@@KF]@O@IBSH{@?CBc@@W@Y?G@g@?_@Ag@A}@Ag@AOAMAMAKAKGw@CQEYCUESKk@AICMESCIKa@AEI[EOEMGSCICGEMCKKWMa@EKSi@Oc@]{@M[?AIQe@oAMYWm@Sg@MUUg@IMKQWa@MSUYKOa@g@OO{@{@sAkAMI_@]GGGGWYe@s@[g@O[O]EMMa@Mg@GUa@yBIi@Ie@E[ACQmAm@sDuAqIO_ACUSiAmA{HQmAGYO_AWeBm@{EGm@IgACg@AUAMAO?WA[?]?c@@eABa@Be@@]BYDm@D_@Dc@Fa@Fc@Hk@Jm@NeADYrAmI`@oCF_@Dg@Ju@B[Dg@@MB{@B]@c@?U@a@?k@?]?C?I?UAc@A_@Aa@C_@Ca@AKGs@Gc@CUIs@UuAWoAESK_@GQCMIYK]AGIWK[GUw@aCi@cBs@{B}@uCw@eCIYq@qBk@yAM[M[O[M[MYMYAASg@ISKW_@aAYm@_@aAgBkEO_@KUEKEKGOKWMYEKEMKWMYM[KWKWMYKYMWKYGOISEOKUIWM[GQe@wAAEa@uAGUEOGQEQCIIYq@kCEQQq@_@wA_@{AU{@s@kCQm@Og@qA{DOe@AASk@Oc@qAoDSg@Sm@KWOg@eC}GeAyCo@eBYw@a@iA?AQg@M[Ww@AEIU]mAM_@W_AOm@UcASaA"
                     },
                     "start_location" : {
                        "lat" : 45.9102587,
                        "lng" : 6.712451799999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.9 km",
                        "value" : 11914
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 785
                     },
                     "end_location" : {
                        "lat" : 45.8468515,
                        "lng" : 6.920880899999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eN205\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Italy\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "}mewG{rxh@@[?AU{A_@iCIc@COg@uCMq@Ii@e@qC]mBGa@AKEQEWGe@Gc@Go@C_@Em@AOGcA?CCo@?Q?CCoA?QAuAAgB?aAAo@IgC?KA]A[Am@Ac@Aq@?YAS?o@?u@?U?SAY@y@?C@W?Y@U?E?G@K@QBa@B[BS?EFo@Ly@?CL}@@KD_@?EBM@E@EBa@?C?E@WCY?E?[@S?I@G?G@G?E@C@C@C?C@C@ABEDC@CDC@AB?BABAB?B?B?B@@?B@B@@@FDDDBDBFBH@F@B@H?HB|@?B@d@@XBT?@BNDPXdALb@DJVx@DNHTHZHR?@Pd@L`@BD?@Tl@N^FLJXTf@HNDHLVLVBHLRDHT`@PZ@BLRBFV\\^l@X`@^l@fA~Az@pABBJNHLh@v@Xb@?@HLNR?@BBDHX`@FHPRn@n@RRLPJNDDBFTd@FPBHBHDDDFHLB?BBD@D@D?F@DAFADCBA@ABCDEBGDG@GBI@E?I?I?GAICMCKEG?AIOOSGKO]AAGQEM?AE[Go@CKi@wGCQGaAAKAMG{@C[GiAEk@CYCOAKGSAIIUEGCGACEEIMMOMK_@W?AECECCCMIAAECECWQGGECCECACCACAAAECC?CACAC?CAC?AAC?A?A?C?A?CAC?C@C?C?C?E@C?A@C?A@A?C@A@CBEBE?ABABC@A@?@A@A@?@?@?@A@?@?BA@?@?@@@?@?@?@?@@@?@??@@?B@@?@@DDBBFD@@LNNPVX^`@RTTTXVTR\\XJHNJPLNLNHZXDBJLHFHJFFNPHJDFBBBDPVLTDJTf@Th@Rh@LZJXBJBDDJL\\Pd@HTL\\Xj@R\\NTNVn@dAPV@BPXDDFHJLNPPR`@d@BDDDLRNP`@l@JRJRJTN\\DJFNBLBD@B@D@D@F@FBH?B@D@JBX@F@D@D?@@@?@@@@@?@@@@B@??@@@@@@??@@?@@@@B?@@@?D@@?BAB?@?@AB?@A@ABA@A@A@A@C@A?A@A?A@C@E@E@E?C?C?C?CAE?A?C?AAC?CACACACEIIKIEYa@IQGOAGCIAIAGCSIo@Gm@AGAUAU?CCUAUEw@C_@AOCUGc@My@[gBO{@Ic@Ko@?g@CMCUMs@ScB?SA[CqB@S?U?K?KAIA[G]Ke@G_@Ak@Cc@A[Ju@Hk@@?D[DS@CH[HSBIJWDKBELUFKDGf@q@JOJMBAPOVWPQTSFGLMh@i@@A\\[@?^a@XWDEVUh@g@PQLMNM?An@m@JKrEaFhLeMj@m@j@o@lLiMZ_@lDwDZ]f@i@hKeLx@{@LONO@C@?r@y@dBkBzDgEhEwEZ]rB{B|HqIZ_@bGsGrB{B|CmDZ_@Z]\\_@r@y@x@_AZ]tA_Bx@_A\\_@Z_@\\_@Z_@\\_@Z_@dI{IJKv@{@~HuIrAyAvA}APSx@{@~AgB@AjDuDZ_@z@}@PSrKoLFI@APQHI@AzEiF~AiBPQzLyMPSJKfEsERUpAwAJK@A@AfBoBzCeDNQJKhCsCTW@AtFmGZ]Z_@tA}AZ_@@AZ]lC{CZ_@zHyIbF{FZ]tA}AZ_@x@_ApC_DjCwCpB}BZ_@pIsJhM{NzC_DxC}C"
                     },
                     "start_location" : {
                        "lat" : 45.9083131,
                        "lng" : 6.8486193
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 km",
                        "value" : 4089
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 249
                     },
                     "end_location" : {
                        "lat" : 45.8172505,
                        "lng" : 6.9515142
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eT1\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "ymyvGovfi@d@i@d@i@`@c@x@{@r@y@~GuHx@}@pKqLZ]\\_@Z]bBkBlHeIrB{BZ_@tA{AdFwFZ]\\_@`GuGtA}AtJqK@AZ]?AhJcKHKtJsK\\]rJqKnCyC\\]nCyCjEwEZ[^_@X]z@}@Z]rB{B\\]nCyCZ[vA}AZ]^_@nG_H?Ab@c@VY|@aA\\_@zBcCVW|@aAJKhAoAd@AP?P@PBRLJL@?FBHDF@D?BADC"
                     },
                     "start_location" : {
                        "lat" : 45.8468515,
                        "lng" : 6.920880899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1098
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 122
                     },
                     "end_location" : {
                        "lat" : 45.8173772,
                        "lng" : 6.9639007
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eT1\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "ytsvG}uli@z@{@HMHMDSBI@I@Q@U?KCM?EAAAIEKCIMYMWUgAES?CEQOiAACM]CIUg@K_@EWEUCQ?CAa@?UAODo@@OHiAFu@Hq@Hs@Dc@Dc@@_@@G?W?e@?k@Ce@?QAAAs@Cy@AYA]C{@Eo@Cq@As@EcACs@Gu@AWIu@UcBGe@Ii@g@kDG]CSAIAGAG?GAK?I?E?I@I?C@G@GBIBGBGBGDGDGFEDEFCFEHAFCF?H?F@HBHBFFJJ"
                     },
                     "start_location" : {
                        "lat" : 45.8172505,
                        "lng" : 6.9515142
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 714
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 45.8164773,
                        "lng" : 6.955277499999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSS26dir\u003c/b\u003e (signs for \u003cb\u003eCourmayeur Centro\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAosta\u003c/b\u003e)",
                     "polyline" : {
                        "points" : "susvGkcoi@JNDLFVBV?XCXERIXKXIRITEPCPCVAZ?PAT@\\B\\F\\J`@b@`A^x@Vj@b@nA?@FTDT?BDTBRBl@@t@@H@r@@r@?f@BpB@r@?Z@h@?H@\\?@?f@?@@f@@f@?TAJAN?X@R@\\@R?BBd@BRDX"
                     },
                     "start_location" : {
                        "lat" : 45.8173772,
                        "lng" : 6.9639007
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "106 km",
                        "value" : 105571
                     },
                     "duration" : {
                        "text" : "1 hour 9 mins",
                        "value" : 4124
                     },
                     "end_location" : {
                        "lat" : 45.4296671,
                        "lng" : 7.846518599999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eA5\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE25\u003c/b\u003e (signs for \u003cb\u003eTorino\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAosta\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMilano\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSanthia'\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "_psvGommi@Lf@FTTz@@FDPJVFLBDFJFJLN@BJJLHJFNFLBP?VARAPCTI@?LERMBC@AJKPS@AJOV_@Zk@~@aBXm@l@eAVe@Xm@zCsG@CpAmCr@mAV_@V_@n@s@LOr@s@z@y@ROp@_@x@c@|@_@^K\\Kv@Sv@If@?ZAd@@tEf@fAJ|Gt@`@DxFl@bAJjALtEf@zGt@~I~@bJjA`@DH@@@T@J@|@HrNfAvE\\vADt@@P@b@@vABhA@pBCvBM|BYp@Qj@MlBm@r@[`@QNIPIjBaApA{@pB}AzA{Ad@m@\\_@l@u@FKhA_Bv@qAHMl@mAlAuCRk@Ri@h@_B`@eARo@H[DOj@oC?CXwA?CVwABQ\\wBHk@BMXsBFc@BOF[Py@H[Rs@Pg@h@wAt@kBHQJQVg@Vc@b@m@BCt@_A\\_@\\]PSHIxAuAPQfB}AfC_CtBgB@AtAkA`Ay@\\Y\\Y^[BCXU^WDCVURQJIf@i@n@o@Z]TUFG\\]@CX[JMXa@V_@NYXu@Vo@`@iAd@eBVoAHq@Hi@Hm@JmAH}A@_@BaB?oAAaB?}@EuBGuBG{CEeBGyCGyCAs@CeBG{CGyCCoACiAAs@GyCAs@GmECq@CqBC{A?s@Ac@?_GBcAFiCHcAJeB?GRoCFw@Hk@Fq@Hi@?EHq@Hm@@CHo@T{AZ}APs@~AwGtA{D`@cATm@v@cBlAgC@AVa@vA_CHKl@{@h@q@v@_ADIj@m@BC@Ax@w@^[^]j@i@LKZ]l@k@NOh@k@l@i@HIv@{@RU\\]Z]z@{@Z]@??AZ[Z]p@s@FI\\[@?\\[?ADCTW@?Z[@Ax@y@\\[HIRQZ]@AZ[@ATUDGZ[x@}@\\]?AZ]JKPQDGVUHIJKBCVWf@e@JIPU`@e@NQNOLM\\]XYh@m@FG~@eA`AgAJO@?LOLO^c@d@i@NQZ]Z_@DGTUZ_@Z]?A\\[^[\\Yd@_@x@i@~@k@^_@b@c@Z_@@?Z]@AX[^_@@AXY?AZ[@?Z[VWDE@AZ[\\[@AZ[x@w@^]Z[xAuA@AZ[@?x@y@\\[\\]RSf@g@XY@AvAqA@Ax@{@@AZ[@A`BcBvAaBLOpAcBV]t@kA@AVc@PWDKXg@Ve@@CRe@h@oAHQx@yBVw@XaA^yANm@DOH_@Nq@RkABQLm@BSD]Jq@XiC@IN}A?ENyC?IJoC@a@B_CAk@Aq@?a@IkDO{DCs@GeBEq@Es@IeBEq@Ek@A]IoAEq@UkEKeBEq@E_AU_ECy@?wBAcA?C@YBw@Do@Ds@Dq@Ho@BQFi@Hg@Lo@Z}ANk@@CJYXw@\\aA`@}@Tc@PYDKR]f@_AJUhAwB\\s@Zq@Tc@PWXg@Xg@b@s@DKP]LURa@BGf@aAJSJWLWN_@Vk@Pg@Xw@BIJ_@Ne@@ALi@HUVmAVkAHk@DWNs@@IHe@Pw@F_@Hg@DOHi@Z{AHg@H_@BO@ETiAHY@IPs@DQJa@Ni@L_@BIFQBKXq@L]?ABEN]BE?ARe@JQLU?ADINW?ADGPYZ_@@CFGV[HMRUV[JI\\_@^_@ZYPMHG`@WRMHEnAu@zA}@zAs@n@U@?`@ObA_@DAZK@?`@O@?dAc@b@SNIh@[b@[r@k@h@g@nA{AVa@HMZg@Vi@Vg@N_@JW?C@ANi@d@yATcA^uBJu@?CFm@BSB_@@MBc@Be@@K@g@?K@s@?GAcAK_CAGI}AGy@CWGo@ESG]E]CKCKI[CGQm@Ok@M]CKMc@Ki@AEyAkHGYMm@Kk@u@_DQoAYsBKaAEMA[E]MgBOsCGiCAq@CgB@Y@gB@_@@{@BaAFgALwBP_CHm@VwB\\oBj@{CFc@X_ABIH[Nk@@GNe@Nm@N]d@mAPe@@EVe@DQHS@ATe@Tg@JW`@o@`@w@Zi@LQX_@t@gAFIlAsAlAqAHIxAsA^[ZYf@a@TSRQh@a@h@a@pAcA@?|@q@|AkA^YJI^[PM|@q@ZU`@[~@s@\\Yx@o@BC^Y^W`@]ZU\\Y|AmAJInAcANMNKtAiADCtAkAd@_@^YJIPM^W^UFEVSFGTSHIDITUZ_@Z_@BCV]V_@@AXc@`@q@NYDIN[JUHSJUHSRi@JUTs@Pm@Pq@?GTmARmAHe@d@qCJo@Jq@Jo@F[BSJq@Jo@Lq@BUFYb@qCJq@Jo@Jo@F]BSd@qC@IHe@Jk@?CLq@Lu@VyA?CV}Ah@oCDSF[Lo@Nm@Z_BLo@\\cBLi@XkA|A{FdAmDPk@J_@j@cBnAmD\\cAHQh@sA~@}BN_@Zs@j@qATg@\\w@NWVg@Tg@Ve@Vg@Vg@Ve@b@{@JQXc@Ve@Xe@Vc@Xe@Xc@@CV_@Xc@nAiBXc@Xa@Zc@HMNSZ_@Za@Z_@vCsDRUV[x@aAJKnC{Cf@k@~@eAv@}@\\_@Z_@Z_@\\]r@{@BC\\_@HIPS\\_@Z]\\_@JMNQZ_@\\_@Z]Z_@FITUZ_@Z_@Z_@LONOZ_@Za@Z_@LOLO\\_@Z]Z_@\\_@LQHITY`@g@LQ@APSn@u@Vc@Va@BEPWNYPWHMR[f@_A?AR_@BE?Aj@mA@?BGZo@JWXs@bAyC@If@iBZkABIJc@j@kC^}AFWDU@Cz@uDNo@l@kC~@aEJe@dAyEBONm@jAiF`@cBJg@^{ALo@Nm@Nm@DQNs@DS@C\\}A\\}ALm@No@\\{AFUF]DQFWLo@FUDW^eBZuALo@DUVgAF]?ADOLm@No@Lm@Lo@Jg@@EDWFWDWJo@DYX_BXeBT{ATkBJw@L{@Ju@`@kC@G\\cEFq@BOBa@Fo@Fq@?CFq@Fs@Fq@Fq@BYFgA?CJgBBk@Fy@Bg@?CFmBFgBBs@@KToI?M@e@@K@c@?C?sB?s@?iA?M?yC?A?O?a@?Q@oE?yD?U?]?s@?U?q@?A?s@CmE?[AwB?G?mAAmA?gB?WAC?kAAs@?s@AgBAgA?A?CAmA?s@As@?S?_@?Q?AA_@?QAa@?q@As@AgBCgBAsCCsA?[CgB?o@?CMeL?A?i@AI?EG_EAs@As@?C?AAm@As@Cq@EuC?EAs@EgBGeCAmCA_@?uB?o@@u@?S@]?w@Di@@c@@S@m@?IVcEHqA?OL_BBWD[H{@LgALwABSHk@F]NcANm@@KFYZ}ADQj@_CNo@l@_CVmAViANo@Nm@?ALk@No@|@wDNo@DMF_@Lo@Jm@Jo@Lq@f@oCHc@Dc@DU?CHm@?Cf@eEHo@RcB?EL}A?GJ}A?GDi@JeB?EBm@@q@Bq@By@BuC?_@AyBA_AAyAAq@Au@GaBCu@Cw@K_BEq@OgCCOYuCGm@WcBUaBU{AOs@?A]}Ai@kCQo@Qm@_@wAIYGSc@yAOk@Qk@CIw@wBmAkDEKM_@y@aCSk@AEQc@g@uASi@Si@Si@i@uAg@uAM[EMSi@Ui@Si@i@sAi@wACIO]Si@Si@sAgD{@}Ba@cAGQk@}AOa@i@sAg@sAQc@CGSi@Si@Si@Sk@}@}Bg@uAUo@Qc@Sk@i@sAg@sAEIGS[u@uAeDm@yAOe@Qe@CGc@uAM[aAiC}@gCO]Uq@Wo@e@sAc@uA[cASk@AEYy@K_@K]Uy@Me@c@eBc@gBCIQcAK_@g@_C_@gBS{@Kk@ESMs@ESK}@Ii@CSCQAKAKAICOCYEYGo@Gu@G}@AKCeAA_@CaB?KGsCC{BA]CwAKcE?GEgBAm@AC?c@A_@IqDAKCq@E_BEmAA[IgAI{@[kDIq@AQQgAYiBMs@Mm@]yAOm@Om@Qm@Ok@[eAGSEMK[AAQi@_@aAe@qAQ]Q_@KWIOYk@U_@y@uAo@eAS]q@_AQUi@k@?AaAeA[[WUg@e@y@u@i@a@sA}@YOcAg@aBu@m@YUKMGSIWOq@a@SMAAa@Wo@a@EE[UMK_@[USc@a@[[KIOS_@e@}@wAc@aASc@]y@Mc@IUi@iB?Ca@cBI[G]Mk@ESgAwEAGMg@_AqDMe@Oc@ESCEQm@[cAk@kBMc@CEq@oB}@gCUo@CGQa@CGa@eAu@gBsCwGi@mAWm@oAuC_AuBMW}@sBWm@iCcG]u@eAeCKWISCEe@gAa@}@KWO]EKCGw@eB_@}@Yq@]w@O]k@sAGOWq@[}@GO?A[aASu@Qo@Mq@GWIe@Im@ACIk@AKMiACWAUIeA?KCe@Ca@C_BA_C@mBDsC@s@@}@?CDiC@s@@s@@_@?SBkB@m@@s@FgEFcHDmE@s@?E@y@@mC@uA@Q@cB?w@B_FHeNB}F@oB?uBG}BCi@CYEi@Gk@OsAIe@Ie@Os@UcAm@sBMc@Qk@Sk@IWk@mBsAmEW{@Og@_@{AUcAKg@GY]cBAGSuACQS}AGo@MkAMaBC]AUC[GoAEmBA[CkAAsB@yA?C?_@@gA@k@FgDHiE?A?IF_DB}@HcE`@sRBiADoABq@BuB@QF{CJmEBq@@s@@YFmAF}A?ENyCDcADmADmA@iA?o@Ae@?c@Ck@Ce@Ae@Ee@Gw@Is@Ik@OaAMq@UcAQo@Oc@Oc@Qg@O_@O]KUMSe@y@MSe@s@e@m@SUKKY]_@_@o@o@e@e@CCYW_A}@YWSUIKgAeA[[c@c@m@m@UWUUY]UWMQKKQWS[U]OYCCWi@?AWi@CGQc@IYSo@]yAWgAUmAACG[EWMaAGm@E]I}@E{@IiAEs@GyAa@cI[{GMkCGuAMeCKmBOaDEy@E{@GgAI_BIoAUuECo@WsEA_@KcBQgDCc@GmAE{@Ci@Ek@IuAImBWwFGiBGqBGkBEaBIaDAGQ{GC_AEuBEkAEmBGsBCkACy@Ay@AIA}@?aA?e@@c@@y@@i@@e@Bg@Dw@Be@@SFu@F}@Fq@HgAD]?CB[Di@H}@Fs@HmAFmA@m@Bu@@_@?W?k@Am@?[?CCe@Cw@Eg@C[Ca@Is@Io@Im@G_@Kg@Mk@Kg@Mg@K]Su@Ww@Wy@Ma@?Ai@eBUs@IYc@wACESs@Ka@GWG]Ig@G]Ig@Gc@C]AIGu@Ck@Co@AIA_A?G?Y?_@@a@@_@Bm@@ENaBNcBReBJ_AJaALu@TmALs@Jc@b@mBLc@xAkGb@gB\\{ADOJa@Jg@Le@TgALo@VkAN}@TsANcABONcA@MLcAHu@Fk@LqAJsADe@Ds@Di@D}@FeABy@D_B?G@e@BmA@}A?q@?M?C?G?m@?]A_BCuAAk@EcAEuAGsAGaA?AG_AImAU}CQcCAIK{AMeBCWAOMmBEw@G{@Ac@Eu@Cy@Aa@Aw@A[?y@A}@?o@?u@?]@[@{@@aA@o@Bk@@[Bw@Bg@Do@Bk@Do@HgA@G@O@OHaAJy@Hu@D[J{@Ly@Lu@XaBJm@?ALk@?CFWXqA\\oAn@cCd@}AJ]ZcA`@wAZeAJ[BKDONe@Po@Ja@H[FWTaAH[DQLo@F[PaAPcANcAHi@Fg@BSJaAFi@Fo@Dm@De@FiABg@Bc@Bi@@]Bi@?QBe@@oA@w@?}@?oBAy@CmACk@Cw@A_@Cc@Ci@Ei@K_BGy@Ge@Ee@Iw@Ky@Ko@Kw@W}AWyAc@iCOy@_@{B[eBCSCIG]c@gC{@eFaCcNIe@Ie@[oBc@_Ca@cC]qBIa@Ga@q@wD[iBSkAEWQeAKm@Ie@Ga@Ga@E_@EYE_@CUCWC_@C_@C_@Ca@C[A_@C{@Aw@?g@?]?Y?[?S@Q@q@@U@SBi@@WB_@Do@Dg@De@Fg@Dc@Fa@`@iDLmAHq@LcAb@uDTgBRgBJu@ZqC@C@OjA_KBIXcCNuAPuANwAFw@H_ADw@Ba@Bw@?]@c@@oA?k@A}@Am@Cm@Cs@ACAYI{@Ce@Iw@CUEYAMIi@COMo@G[S}@EMKe@Ok@_@mAWs@K[Yu@Qa@Ym@Ui@i@eAc@{@kAuBc@{@[o@Wc@[k@_AeBi@_A_@w@u@}Ac@_A[s@Sg@Se@Uk@GQQi@K]i@eBQo@c@yAQs@YiAIYG[GW]oBMg@G[UgAOcAQcACOYsBCQUiBIw@O}AQkBI{@I_AKiAMyAMmBE}@IuAC]IqBE{@G{A?GIwBIcCCsAE_BEyBCuAE_DAUAk@?UA]I}G?MA[EcGCkDCaDAeDAuGAuA?kA?y@?sA?_C?_BBwCBcE?{@@y@BmC@_CFmEHyGFgD@m@FiCJgFDcBHiCDgB@_@N{ERiFH{BN{DDw@DcAVyFJyBL{BFeA@]Di@@c@Ba@ReETcF@KFmADy@JgBBk@\\kHNqCFsBJkDBe@Bs@LkEB_BD}ABeB?EBe@?MBaA@cA@i@@k@@wABwAD{IDkG?{C?}B?gF?c@Ae@?]?m@C_DAcAAeAAyDEgC?KGmDEyB?CGmCEkBAu@Cs@M_EEsBAUGoAIaCMcDCi@Cu@SkEAGKoBA[Q}Cu@cMKuAMsBe@{FEi@Ei@UcCUiCGq@Iw@O_BYuCE_@CYc@oEAQMcAGq@Go@[}CKiACQEa@AO?AIy@UiCMaBK_BG_AEk@?C?AGuAGkASeEGsAKaEEcACaBEsBCwB?GAeBAcB?oA@yD@uBB}AFuCDsB@_@B_AB_ADiANcDD_AVgEBa@Dc@T}CR{BNaB`@aENiAFq@NkAb@aEt@sGp@gGb@wDNuAp@kGHq@Hq@XgCLiAHw@JeAJqAHmABg@@Q@O@]BgAB{@?_@@eB?{@?iA?ECwACi@As@ASGiBEmAA]AUKwBKaDAGASAW?GAQCw@IyBI}B?CEiAAa@Cc@UcHSoFQsDAUCUAUAWW_D[_DGa@Is@McAGYGc@AMG[ESMq@]_Bg@gCAEOm@WaAIYQm@W_ASm@k@eBk@}AK[GMk@sAOYSg@Sg@M_@IQACKUc@cAQ_@KSM]Qi@Sk@M]Qe@Sm@[cAUs@I]Mg@Oi@IYI]Ia@Mi@Mk@Kg@Ke@EWKi@Q_AOw@UwAE]Ia@IeAOqAMcBGq@OoCE_AAWC}@AMAm@C{@A{@@k@?]?G?w@?c@@yB@c@@i@?G@K?I@o@@]Dy@?SBm@@AD{@J{ADy@L{AVyBPyAJs@@IBQFa@BMPiAJe@F[?EFUJg@XsAPs@HYH[DSV}@J]H[Tu@Ts@Ri@?CXw@Vs@Xs@Xm@Ti@\\u@HOP_@BGHOVk@Zk@N[LYVg@N[FIPa@BEd@_AHMN]Zm@\\o@Zo@Xm@Zm@Zo@Vi@NYFMTg@Zm@Xk@N[LWHO@EXk@N]LYLYXs@Tm@?AVq@DIRm@J]Po@Lc@FQFYFS?CNk@Lo@XqA@KBMF[?ALq@D[Ho@D]Hu@Fq@@EHcAF_AF{@D_A@M@O@W@KHeB@WBYFaB@Y@]Dk@@ODy@Be@Fy@D_@B]@KFq@J{@D[D[N}@DYDQTmANm@Pw@FSH]Tu@FQFQRq@N_@`@cAf@iAj@kA\\m@d@y@@Cb@{@Ta@HQh@{@\\k@n@aANUBCl@y@BCFITWPUHKj@m@NQp@m@fAcA`BqAxBcBRO~@q@HGr@i@HGzAiAzAiA^[VUrAiAr@o@`@_@f@k@r@s@HKlAwAjDaEb@g@\\a@RU?AZ_@`@g@FGf@m@X[HILQ|DuET]RW`FeFrCuC\\]fGiGrAw@n@]^QbB{@vBw@xBw@RI`@Ql@Sz@Ur@QBAb@IXG^Gf@Ib@GDAPCTEZCZCt@GZEz@GRAj@C`AAt@?r@?B?^?d@@Z?f@B@?h@BZBZ@h@Dv@FF?PBZ@L@f@DVBRBF?@?H@NBH@H?N@PBN@X@\\Db@BN@J@bAHr@FrAJB@rBPh@FXBbAHf@F`AHt@H\\DXB^Dn@Fn@Fl@Fl@F\\F^D^Db@DNBL@NB~@JbAJ`ALlBTl@FvAPdANbALb@FXDXD~@LnAPt@JvBZxAR~@Jl@FF@p@DX@P@j@Bh@@h@@z@@n@?\\Aj@Ah@CZAXANALAv@Gb@ENANCFA^Ev@Ml@K`B]p@OVGb@Ih@Kf@I|@KPCPAf@ERCz@G`ACtAEF?x@@~@@|@Dj@Bj@DP@tALj@Hh@HF@XFf@H\\HtEbAzAZfB\\j@HPBXBLBJ@@?N@T@V@f@?f@@\\Ax@CVCPARAd@GHC@?t@Mh@Mz@Uj@Qb@QVKx@a@RKb@Wf@Yt@i@b@[VQFE^YTOLKt@i@|@q@x@m@^WHIzB_BJG@ARQn@e@rBwATQj@c@PMrF_EnA}@VQf@c@b@_@JIh@k@n@s@FIPUPUd@q@R[n@cAb@y@Ve@Pc@Xq@BGPc@N]Tq@`@oANc@v@eCJ[HWDI@EVo@N]Vo@N[P]Ra@NWh@}@b@m@f@s@j@q@\\_@VWh@i@RQZWn@e@PKLIPM`@UXQd@U~@_@VIZKn@Sr@Qh@MtBi@d@Mf@Mr@Od@M^KTGRE^Kl@Oh@MDCd@KVG`@IPG`AUp@Q|@Wl@QJE^Kh@Q\\M\\MVKr@[ZM@A`@QVMj@[VOVOp@e@`@[`@[ZUZWh@e@x@s@PQ^a@`@c@f@k@RYX_@X]l@{@FG@ALSNU~@{Ab@w@Z]FKf@}@LQ`AaBdBmCx@sAR[PYp@eAPYRY`@i@PYn@w@|@gAj@q@h@k@n@o@d@e@f@c@^]VUXUhB{AtBkBFGd@c@~@aAX[j@m@^e@p@y@f@m@^e@PYt@cAn@cAPYfAiBDIVe@\\q@nBqDJSHMDIVe@Ra@BEVg@`@s@r@sAv@yAVe@n@mArAcClA_Ch@aA^s@p@oAvAkCJQzAuCVe@R_@r@sAvB}DvCqFh@cATc@l@mAjAuBhAuBR_@Ve@vB_Ef@aAvCoFtAiChBgDFMHO~@eBh@cAx@sAd@w@zAaCHKR]j@y@\\g@n@}@HMj@w@`AoA`AkAb@k@b@i@`@e@h@q@j@o@p@s@h@i@t@u@bA_AFGPQFEXWv@q@^[FEj@i@vAgAPMFGFGj@a@@Ab@[jAy@t@i@x@k@n@a@PK`@Uj@]~BuA~@k@`Ak@~@i@l@_@l@]fDmB|A}@|@i@tBmAh@[j@]rBkAnAu@^UvBmA`B_A`Ak@dCwAPKNIDEDC|A}@v@e@DCfAo@^U^S`@UrEkC`Ak@b@WrAy@dBaATMhBeAjBkAl@]fBcANIHGf@YXQbCwA|A}@`@W^S\\UnDqB@A@A\\S@A~A}@DCBCjAq@NIz@g@rBiAr@_@TM@?z@_@d@Ur@Ur@SvAYv@Ob@G^Et@Et@C@?T?j@AL?Z@`@@l@BF?dERn@Bj@BT@d@?j@?`AANAzAIb@ClCOb@Cx@EtAKb@ERCNCv@Mn@ULINMLKNMTa@N]Z{@Rk@@ANi@Pk@v@mCNe@Nm@Pk@Pm@DSHWNm@bCoJF[Ly@PyAR}AFi@LkAFm@R}ABSLmA\\sC`@yC@A@KFa@@CVaBBKh@wCNs@TkADSH[BOF[FWTgA@CTiADULm@?A@?r@mD^qBTqARoAR_BNkA@KNwALyAHmAP{CD{A@s@Bw@@sA?O@a@?Q?o@Ao@?aACoACaAAO?QCw@E{@K}BI}ASiFCgAEeACoBA_BAiA?cA?I?q@?uABqBBcBD{ABcADeAJiCH}ANsBJqAPqBPqBFg@Ho@PwAHo@Fe@NaA@GT_B\\oBj@yCLk@Lk@`@gBJa@J_@BMZiARs@ZgA\\gAV}@^cAl@eBz@}B\\{@`@_Ad@cA\\u@Vi@P]bBaDh@{@h@_Ah@y@PU|CwElBsCdBgCt@kAR[tAqB|BmDRYLUZe@h@}@P[Ra@l@oAP]x@cBlC}FLYtAuCp@wAt@aBZo@Re@d@_ATc@f@{@BGf@w@`@k@DGd@m@@Ar@y@x@y@TS`@]ZWDCx@k@LI^Sj@]@Av@]d@Sh@S\\M@?RGNGdBi@h@QPGFCbA[b@O`@M`@M`@Ob@MbA[dA[r@UNGfA]`@O|C_ABAhCw@`F}A|Ag@zBu@rEwAlC{@NEPG`Cw@pCy@ZK`@Ml@SVI`@Md@QVIHCTItBo@l@STIXKHCv@]v@]fAm@f@Yf@]|@m@|@o@\\U^UnBsABA`Aq@hAu@r@e@PKl@a@jBqAp@e@^WPMLIjBsAPM^Y^WdCeBbAq@JILIt@k@j@_@j@a@FEFELI@AtCsBjAeA@Ap@m@b@g@b@g@n@w@bAuAp@cANU`AwAJO\\i@r@kADE^k@n@cAZe@Va@Xc@t@iA|@uAlAkBl@w@FKPQV[\\_@x@u@ZY\\WTQ`@Yv@a@t@a@dCsArE}Bp@_@p@]r@_@xAu@|Aw@|Ay@ZOd@Wd@UjAo@h@Wl@Y`@UJE`@Ud@W|C_BjCwARKRKz@a@^Sd@Wf@UZQ\\O\\Sz@a@JGf@YFEB?^QJETIx@Yf@Kn@MnAKTCH?XCHA\\ADAZA`AIF?\\GHAHCXGFALC^Kj@S`@Qd@U\\Qj@_@h@c@^Yb@_@HIZ[NMh@e@jBaBbA}@RQTOPSf@e@v@o@fA_A`@]HGHGPOFCJGRMLKd@Yd@Wb@SBATKx@[TIj@QRGd@KVGf@If@Iv@Kl@IzAS~@Mf@IVCb@GDAz@KRE\\Ir@MTE|@S`@KB?d@MXKFEBAt@[bD_BFC`EkBfEqB`@QHExAq@`@Sz@a@hAg@`@Q`@Sl@YTKLGDAPKb@QTKRI`@MVIRIb@MRERGTGXGRE`@Gf@It@KJA|@GRAXAzBMh@CTARAZCLALAZAJAH?b@CHAXCN?f@E\\AJAF?PAHAF?HA^AXCf@CVCf@CTATAp@CZCFAd@Cf@Cn@EpAGRAl@Ej@Ch@El@Ch@Cd@AVAZ?h@?h@@d@@bAF`@DXBTBLBr@J`ANj@Jz@LZDh@J~@Nj@Hl@Jh@HD@z@Lf@Jp@J~@PdC^|@Nj@JVBpARzAVnATh@Hb@HVBd@Hn@L|@LPDTBb@FB@vCd@`@HL@F@`@Fv@Lf@Hl@Hh@Hj@Fd@FX@~@HxBNl@D`BLV@v@FZ@l@D~@Fd@Bf@DZBh@Dv@Dv@HfCPf@Br@DL@L@J@`BJXBv@D\\B~@FhAFJ@J@J@hAHdDTh@Bj@DbAFpAJV@VBT@l@D^Bf@Bb@DX@l@F~CRr@Fb@Bv@HP@h@Bh@DrAHpAHj@Bl@BT?bABn@@n@?h@?Z?JAn@Ah@AZCZAv@El@Ex@Gl@Gx@If@IjAOl@K|@Qt@OpA[ZIfA[bBg@d@Qz@[`@QVKd@S^OXMf@Ub@Ud@Uv@c@r@_@NELIlBmAd@]b@[ROrAcAf@c@~AuAnAgAfB{AnAgAZYHI|BoBLM~@w@h@e@lJiI|AsAtCeCFEf@e@jC{BnE{DBCXWBCf@c@jB_BHIDELKxBmBhAaAjBaBtBkBrCcCz@u@f@a@~AwA~H}Gf@c@nJiInAeAbByAbByAZWhDyCd@a@\\[HGt@q@`@]h@e@TSRQTQh@_@f@]RKPKRMRI`@SFCTI^MLEh@OHCZI`@Ih@I^G^Ch@EzAAL?\\?X@h@DXBRBRBl@FTF^HhB^~@Tv@NzAZhAVvAXtAXD@nAV^HpAXr@Pv@P|@RD@xAX|Bf@lBb@~Cp@nBb@p@N`@JbDt@`B\\NBf@FJBB@LBv@PlCj@b@J`B\\`@JdATv@NbAT|Cp@`ARnAXbATd@JZFXF`@Hb@HbARz@TNB`ATH@@?~@RtAZnAVnAXD?lAXbCf@XF@@F@ZF`@JJBPBZFv@P|A\\lB`@f@Jh@Hp@JZFj@FjALt@Fb@BH@d@@rAD~@?D?n@?z@A^A`@?rBE~@AbCE`BCr@A"
                     },
                     "start_location" : {
                        "lat" : 45.8164773,
                        "lng" : 6.955277499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 557
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 45.4255005,
                        "lng" : 7.846231399999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eE25\u003c/b\u003e exit toward \u003cb\u003eMilano\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAlessandria\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGenova\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "m~gtGwo{n@LLHBF@F@ZDD?NBTB@@b@LND@?NFLF\\PLFf@\\hAlAb@`@DFXXRRFFPLLHNHb@NNBF?D@L?F?RAZEPEVITQ^]RUNYNWBGJYDMBMBIBKFc@F_@?E"
                     },
                     "start_location" : {
                        "lat" : 45.4296671,
                        "lng" : 7.846518599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "53.6 km",
                        "value" : 53621
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1758
                     },
                     "end_location" : {
                        "lat" : 45.2477211,
                        "lng" : 8.459935399999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eE25\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "kdgtG}m{n@H}A@MB]Dy@Bq@H{B@sB@}A?_B@]?K@O?W?C@WHwB@MVsFLoBBs@Dg@JmBRkEJkB@S?C@K@I?ABO?G@MVaCXwBRaB@IViCPgD@S?ERuDz@mPNkCNkCLqCNgCTqE@GH}AToETkEt@kN|@aQ^aHLkCJqBDq@Do@^qHF{@D{@X_GRqDL}BD}@F}@Bi@JmBHeB@GXuFDq@TmETiEF}@D_ApAqVTiEDs@Dq@p@}MDw@Dw@BYBq@HqABi@RkDBY@[DmABmA@YBy@B{D@wB?k@A{DAkGAgM?oAAgF?s@?s@?mBAyH?}D?kC?M?s@?qAAgQAqCAcV?oFAs@?yBAqQ?qDAqB?yK?cCAqC?mXAaQA_S?i@AaL?e@?iAAkA?mA?kG?K?mE?e@AgC?}@?c@?O@oA@[?m@BaABsAJ}DH}BFaADcA@OVeELeCNoCBq@JeBJkBJwBNkCHuAf@qJFgAHoA@UNiCVwE@[X_FDs@XeF?E@ONwCj@}J@WTiEB[T}DRyDhAqSDs@@MFeAb@yHj@cKPmD`@eHLeCDu@`@kH^wG@Q\\yGT{DVeFDi@FoABa@HwAB[HgBFgAB[LgC`@aHDu@NaCR_CRwBZoCZaCFc@NiAT{APaAN{@VqAXoAP}@DOFQ`@mBd@oB\\sA`@uAh@cBl@mBfAkD`CwHnBmG`A{CTu@dBsFVu@r@_Cf@}Af@_BNc@fByFh@aBpBsGx@gCRm@Ro@b@kAHUPa@Pc@Vi@Ti@BEXi@dAgBDIDGFKHKDEBGJOFIFKT[X_@Z_@V[RWn@q@HG`@a@x@s@b@[p@e@jBgATQb@WjCyAjAm@fBaAnAq@nAq@`B}@f@YpAq@nAs@d@YPM|@m@lAaA~@w@VW^a@RUr@y@bAuA`@k@p@iAVa@j@gAf@eAf@iAlA{CVu@|AgE^eAFOdAwCj@aBXw@Z}@j@}AfAyCZ{@d@uAFOhCkH|@eCf@uARi@FSRk@Ri@jBkFhAyCh@}AL_@DKpAoDd@wAf@sALYBGfA_DHUZ}@Xu@d@uAVo@d@qATm@d@sARi@?ARg@f@wAPg@@Ax@_C`BqE?A@AtB_GRi@d@qA@Cx@cC~@oCj@kBZgAHY@EDSVeAJ]H]H]Py@H_@He@Jm@Nw@PeAN_AHq@b@}CJ}@L_A\\iCDWBUpAeKF]?CF[\\kC~@oHXyBJo@R_B?ABQF]?Ab@eDZgC\\iCp@aF`@aDJs@Ho@Fa@VkBTeBv@{Fh@_EFk@RyABQZeCj@eEHq@tByOl@yEHg@D_@^qCz@qGBUtAiKh@gErCiTl@wETaB@Eb@mDt@oFb@iD^oCZaCn@}EZaCxA_LzAgLZaC^wCVkBPkAp@iFj@gEBSHo@@GFi@@G@Of@oFVkDRyC?I?ADq@@UB[Ds@NeC@YHsA\\aGJiBTiEHsA`@_HVmEL}BDs@Du@@GNoC@[BWDgADcAB_A@iA?kBAiAGoCCWKgBMwAAAASK{@K}@YwBGc@Go@Gg@IuAE}@?MEuAEmA?GKwDKeCAQEkACeAA[?UAO?QAO?OEeBGcCC_A?GAW?c@?e@@[?K@M@g@?EB]@c@Do@@O@OHeCBw@Bm@BYF{@Hs@Lq@Lq@`@gBVu@HUPk@BGXw@\\u@P]DK^s@hAoBdBuCZi@NYJUZu@\\u@b@oA?A^sAHe@Nu@F_@Fe@TyAFa@BMBYVoBTqBJq@NaAD]^yBR_AN{@`@yBZsAZuAT_AVeAFSNo@XcAj@kBp@yBPc@Ts@Vs@dAuCv@wBVm@L_@DIh@{AxBaGJ[FORk@HSr@oBHWZy@FSp@iBL]To@BIHSHWt@oBdByEnAgDDINe@Pc@?AvCcIDOFM`@kADIz@_Cx@}Bf@uAn@cB`@iAx@}Bz@_Cf@sAd@mATq@L]BG@Ad@sAdBuEXy@d@oAt@sBz@_C?Af@sADKHSBKRi@Rk@Pi@Rg@`@mADKHYFQHUDKDQL]?Ad@sAf@aB`@oAZeA?Cp@{BLc@Le@Tu@Ja@zA{FFSH_@Nk@Pu@H]VcA\\}APw@\\wA@GJe@Li@P{@XuA`@oB`AeFf@iCXwADOVsAb@_C`@uBl@{C\\aBl@}CJk@hAyFF_@p@iDNs@He@t@wDNo@nAyGbAeFXyAb@yBhC{MLm@Ns@?CxB_Lx@iE@CXwAz@iEF_@Lo@?ARcALk@\\eBFSLm@TeAJc@Ps@R_APs@r@kCFUXcAd@aBZgA@Cd@}A^kAJYL_@d@sADKlAcDd@qA@AJ[n@yAv@iBPa@Vk@p@yADGP_@`AqBxAyCDIN]DGVg@HQDKRc@LWd@aAJUl@kA`@{@FM^w@BE@CdAwBbAsB@EZo@NYr@{An@sAVe@DKh@cAXk@h@eAP]HODKP]N[tAuChByDFKN[@ELUDIrAsCj@iAP_@r@}A\\q@FMLWbCcF|AaDTg@Ra@vBoEl@mA`@y@r@yAbAwBh@gAHOTg@HMRc@^y@JQZq@f@eA\\u@b@}@`@{@HQJWb@cAd@eAXk@|@yBr@cBb@kAd@iAn@cB@CRm@JYJWVo@`@mAn@iBl@eBX_ARi@Ne@Ne@Ro@Vw@t@gC^qA`@yADK\\qALc@fA_E~@wDH[Lm@^wA?Ct@aD~@_EjA_FBK^aB`DaN\\{AxCmMNm@^_BT_At@gDp@mCl@kCNq@XmADQlBkI`@eBPq@Ns@Ja@@El@gCt@aDfAyEH]`@cBx@oDdBoH`@gBVgAZqANm@fA{E|AuGf@uBNo@Je@|@wDDUpAsFBITeADMH_@l@kCXkA`AeEDOZwALe@r@yC^_BzAuGPw@^}AR{@f@uBpAyFrAwFZsAZqADSdBmHd@uBt@{CPu@^aB\\wAR{@f@wB`BeHp@wC\\{Af@sB`CeKFWNq@Ja@ZqAPs@BMrA_Gv@oDFWR_ATgA^oBh@mCN{@l@gDF_@V_BXaBZkB@GRwATyAXqBJw@VqBNgAFe@D_@Jy@Jy@TwBb@}D@OLiAJeANyABa@N}AH_ADo@TqC^oFJcBfAePLgB?Mj@qITcDLoB^qFJ_BR{CB[BY@WXiEBUJwAf@}H^wFLcB@WNsBRuCb@_HDk@F}@ZuERyCDs@LaB?E|@_NNoBLiBLmBFaAXkELiBLkB@M|@uMLsBTgDJ{A`@aGLgBf@wHPkCVuDNqBFgAv@uLNmBr@qKLsBh@uHTkDFeADa@Dq@`AyNHgADq@HkAf@wHFy@LsBDm@^uF`@{F@WNqBLkBR{CNyB?AN}BNyBVuDNwBToDRwCFy@De@@STwCLwAPsB@IP}ABWR_BZgCTaBTuALw@D]Lw@DUP{@^qBXwAXuAViAJc@Ry@H]ZoA@EZkAFURy@~A{FVcADMPm@FWFSh@oBv@uCLc@ZmARq@BMNi@Rq@XgABK|@cDDSHYV}@H[Rw@La@J[rBoHH[~@uC\\iAPe@L_@BIVs@J[Vq@l@}Ad@kAZs@Xs@LUh@gAf@gAj@gAP_@Tc@h@eAl@eAp@kA`BoCp@cAZg@p@iANUHOFK|BsD@CNSb@s@|AcC~@yA@Cv@oAhDsFbBmC`A{AV_@PYl@aAh@{@|C{EjAkBn@cAt@kAn@cAfC_EfAgBn@cAXc@@ChAgBx@qA`@o@nAmBNY`@k@PYd@w@vAyBnAqBNUj@_Ax@oAhBwCz@sAHOz@sAdAaBNUn@gAHKR[DIp@gAb@q@xA_CPWJMR]JQj@}@Zg@P[~AeCZe@T_@DIr@iAr@gAjBwCp@cAZi@X_@JQ~BuDtBgDDGn@cA\\i@Vc@Xc@Xc@pCoEp@eA^o@vBeDn@eAZe@j@cA~@yAPYJMd@u@Ra@h@}@zAeCfAwAtBeDf@y@z@sA`A{Al@cAh@y@h@{@pAqBx@qAb@s@JOR]n@aAz@wALQjByCjAiBb@s@v@qAp@gANYJOVe@BGFIJSVe@f@_AhAyB`AqBl@qA`@}@N_@n@yADIZw@L]bAgCf@uA\\_Ap@uBTo@?AHWrCgJpBwG\\gA`C{H|AeFr@_Cv@kCl@qBb@wA|@uC^kAJc@Ni@BGL_@@ENc@HWFSBKRo@Rq@HWDOr@}BLa@@CDQTw@j@iBj@kBh@mBHSb@sALc@x@kCXaAn@sBVy@"
                     },
                     "start_location" : {
                        "lat" : 45.4255005,
                        "lng" : 7.846231399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "103 km",
                        "value" : 103141
                     },
                     "duration" : {
                        "text" : "1 hour 1 min",
                        "value" : 3648
                     },
                     "end_location" : {
                        "lat" : 44.4341426,
                        "lng" : 8.7393985
                     },
                     "html_instructions" : "Take the exit onto \u003cb\u003eA26\u003c/b\u003e toward \u003cb\u003eAlessandria\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gmdsGsisr@FE@C@EFMNg@FMf@sANa@N]FOHSNYd@cAHQZo@v@{AP]d@_AVe@BGj@_Ap@kAl@}@\\i@j@y@v@eAbAoAfAqAdBiBTUl@k@t@s@nAiAx@o@^[`BkA|@i@XSHE^SPKNIJEBCBEFKzAm@PGjImD|BcAzBaAn@WHElBy@RIhEiBpF}BhGiCd@SnKoEvJcEpKoEj@WVKd@Q`@QnIoDhZgMBA\\OlGkCjCgAt_@aP`@QPGJGBAjH{C@?`Bs@dAa@jEkBJEhKiERIJEDCXMvKsEh@U`CcApB{@nDyAl@WpEoBpAg@h@U`@Q?AlDyAbEeBpEkB`FuBzDaBz@_@NGvB}@pAi@bDuA~CqA^QdBs@@AhFyBl@UJE@AJElCiA^OrAk@pAg@lBm@fBc@vAYx@Md@IZEFAhBQF?h@ETA^AhBIxDDfABtBPzANrB\\jCj@j@Np@RpBr@hAd@`@P`@P`@PdBr@bEfBvIrD^P`@NfGhC\\N\\NvF`CtAl@\\LhAf@B@\\NbBt@|Ap@zAl@JDhDvA|@`@hAd@?@dDrA~CrA`@PFBVLjEhBr@ZTHVJd@RVJdBv@zAh@d@Tf@Vh@Tz@^n@XTHHD\\LfDxAjFzBj@VZLp@Xl@VHDx@\\tAh@NF|@ZfBh@dCn@RFTFz@Nl@LlARjAN^DD@^Dz@JtAJ@?d@DB?t@DL@fADp@@b@@B?H?T?zA?|@AbAClAE`@ApAInAKFAb@C|K}@jBMnCUjE]f@ED?jBO`@EfFa@fCQTCxBQjAKdBMvBQ~@ItDY~@It@G~CWb@ERAlBO|D[bAK~BObBOfFa@|AMfCSfFa@nGe@|@InCS|@IzBQdCSnCUB?hCSXCHA~AMhE[lAKVCdDUHAFA@?tE_@LA@?JA~BQlAK`Kw@j@EtE_@b@Eb@CZC|Ea@b@CZCFAtE_@b@C\\ClAKLAD?HAnJu@~BQpBO|@KD?\\EpAOjAOxAUTE@?RE@?rCk@f@K~Bm@DA`@Mv@Wr@UTIRGt@Wj@SXMj@UvAm@`Bu@j@[fAk@jAo@`Ak@vA}@h@]DElEsCdSqM`DsBdBkA`BeAlAy@|CsB~B}AdCaBnBsAbC}ApBuA|AcAbC_BnBsAnBqAlAy@`C}AjAw@hAw@|AcAzByAnBqAbBiAlBoArBsAbCsAvBgAzAu@dBs@vB{@tBu@dBm@jBi@pFsABANENCdAUb@Kd@KbASbE}@LChDu@pEaA|Be@tA[fAWNALAl@O~@Sx@QbAUrAYZGj@Mf@Kh@Mv@OzBi@pBa@vDw@dAUxCo@|MuCb@IREbCi@|A[jBa@bAUjDs@BApDw@~@UfBc@nA]b@MZKvAc@|By@jBu@n@U|CuAvBgAtAs@pAu@~BwA~AeAvAeA~AkApAcA`BmAbAw@lAcAlByAlA_AVQpCuB`@[|@u@`E}CPOvAeAbAw@|H_GVSbCiBdDeCTO\\Yj@c@f@_@vDqCl@e@\\WFE\\YrCuB~BiBtAeADCnB{ArB_BdAw@LKDCrFiE~@u@lA}@hA{@`CiBlByAHGtDqCpB{AhCmB~AmAnB{A|AgAz@k@`Ak@r@a@^QHE@?FC\\OtAi@\\KjA]rAY|@OtAOlAI`@A^AT?~@?xADd@Bn@F~@JpARr@LZFr@NnH|ArEbA^FpAXtFlArAX|@Pb@JZFhARVDpDl@HBz@Jr@JnANVB`BRb@DTBT@H@B?D@H?rAHfERz@Df@BjDFV@b@?tGJl@?fABb@?F@F?lAB`A@F?zABD?jABp@?x@An@Cv@Er@Il@In@Mx@QFC@?^M@AZIz@[hB{@bAm@b@[FEHGVQLMj@e@j@i@t@w@LOJO`BuBr@_Ah@u@b@g@\\a@dAeAr@o@@Av@k@@AVQx@g@ZQp@[|@a@TIr@UNGv@U~@QlD[@?l@?H?L@lAF\\Bb@BVBJ@dALfANB?B@D@B?VJZH`@N`@L@?B@ZL@?NFJDB@@@B@z@h@VPFBnCdBNJ`@R^T`@TNHpAr@h@XVL`@P^RFBRHDBdAd@FB~Ah@B@XHj@PF@TF^J^Hh@HRBh@Jx@JT@v@Hz@D`ABbA@VAh@AX?TAVApAId@EJAXEp@KPE^GLC`AU`AWr@UZM@?^M?A@?XKhAi@DCh@Yl@_@v@g@nA_Az@u@RQDEJKJKFGNOTULMp@w@^i@TYDEr@aAhBmCFIPWxD}Fl@_A~HqLjEwGt@cAj@u@JOLOn@u@v@y@X[h@e@d@a@VU\\W`@YBCZS`@Yh@[v@a@dAg@f@Qf@SrAc@dAYlAY`@KJCr@O\\ID?pAYn@Mz@S^GdAWb@IZIlAY~@WhA]`AY^MJETGTILGzCiAdAc@RIj@U`Ae@bEuBpGsDr@a@vAy@dFuC@?lWaOlUwMb]yRZQPKbFuC`CsA`DgB`Ak@f@[jC}AtCaBTMv@e@hDoB|@e@bAk@jAq@lEaCbAm@`CmAl@[\\QfBy@fAg@vCmAb@QNIPGlCeAjAe@vAm@bAa@`Aa@tAg@ZMbC_A~Ao@BA@?f@SjBw@dCaAZMZMLEfCaAlAe@v@[PGxAk@lFsBTK`@Q\\Q@Aj@Ud@SPGRIDCRI`@Ov@[d@QzBs@\\MtBo@pCq@`B]PElAUbAQvASJCjBU|AUp@IfAGhAGRAn@ExBE|@A|@ATAV?|A@nADB?b@@x@Dj@DbBJjAJrBTf@FxAVnATd@H`@Fr@NTD^Hv@PXHRFNDTHxBl@pAb@`Bl@D@x@Z@?~@^TLp@ZpDbBLFfAn@jDrBdAt@|B~AzBfBpB|Al@b@|@r@zAjAbBnAdAv@h@\\HFb@XbAj@`@Th@X~@b@hAf@D@\\L`@PTHND^JLD^Lt@Rt@RhATVDTDz@Nt@Jh@Dx@J|@FdADtABV@h@?X?R?dCEb@Ab@AlACrEIX?XAzACTAT?lCCpACZ?d@Cl@?fBEv@CrCELA|ACr@Av@AvACfDGjDGf@AdBEjACtACz@AlDGrDIfAAtAExBCn@CfDGrAATAL?r@A~@Cj@Cl@CH?^Cj@Ej@Gh@ENAXEH?NCf@Gh@Gh@Id@ID@FCTGREVGNGZGrDaA`Cu@x@WpAe@d@SBAf@S@Ax@a@RKrAo@ZQZSLI`@Wt@c@lAy@l@c@bGqEhBuAp@i@`@[LMNKROPOXUp@e@ROPMFGHGROb@]PKHEDCPKTU\\WrAeAVSNKVUb@_@TUZWb@YZU`@YrAkATQZUdAu@v@o@LIt@k@vAgAtAgApB}AJIjA}@tAeArCwBPOXUr@i@^[fAy@FEHETOHGTOROjAaAt@k@ZWb@]|AqAhAw@f@_@x@m@XSNOr@e@hBuAXUrCuBbAu@PM@AROhA}@x@o@d@_@|AiA~@u@|AiAv@o@TQd@]PQNIr@k@p@i@~@s@XUz@q@pAcAnA_A`@[XSVQXSbBsAf@a@PO`@[^W\\UxDyC^YvDuCPOVS@ARQNMhA{@n@a@f@]`Am@^UFC^Ux@c@TKd@Uz@a@f@STKt@Y^M@At@WPGtAa@z@SnA[nAU`@IpASfCYvAMjBIdAAr@CvB@`A@zAF|@FXBb@Bf@FhBRz@LF@pAT|A\\b@JRBXJt@RlCp@`AVbAVj@N\\JF@j@RjAZf@Lf@LtCn@^H`APpCd@H@j@Fz@JN@zCZD?x@HvBLTBL@r@B\\@|@BpADF?|@@tA@b@?J?h@?`AArBErFUzAGtIa@f@CnCMn@ErGYrDS`CW|AUzAUZIxAY~@UhA[`Cw@lAc@b@QJEnAg@dAg@pAo@fAo@x@c@d@[z@i@jBuApG}EbFwDhCoB|@s@vBaBpHuFdEaD`@YvGcFxEoDtGaF\\WZWvH}F~BgBvC{BROlBwA|AkA~BgBnByAbCmBtDsCv@k@lA_Ah@a@b@]XS|@q@`CkBzDuCLKJIBCfCmBfDgCnCsB~AmAhBwADC\\WDCXUpDoCdCmB\\WXUzAiAFEr@i@r@i@nCuBTO`BqA^WBCNM~BgBhDiCfDgCnA_AhBuALKnA_AtCwBVSvAiAbAu@f@_@rAcAZWnByAhA{@BC^W|EuDnByAzDyC`@[\\WbBoA~AmAxAgAZUBCFEjA{@`@_@b@]v@q@@?lCcCjBgBjAmAl@o@j@o@Z_@Z_@PQDGZ_@z@eAZ_@HIPUnAcBnAeBLS@??AhAaBdAaBHOXe@FIzAkCz@yAXg@NYDIDIXg@~AsCDKxAiCRa@h@cAR_@Ta@NYn@iAZk@t@kA|@kAPQx@aAx@{@dAcAj@e@lA}@TOl@]d@Uj@YBAj@YTINGXKVIVILETGZIZGZI\\GJCNAHAVEJA@AVClAM@?ZCPAPCfAI@?`CULA@?`@E@?\\Cj@GbAEd@E~AOt@Gr@GTANAZE`AIf@G`Dc@p@Kx@Mz@OBAf@KTEr@OHAh@Mz@SVI~@Uj@Oh@MBAn@QZKPGh@Sh@O^O^K@APGf@QRGTKb@O~@_@BALERGf@QVKRGd@S@?b@Qj@QTKf@Qf@QTIf@SPIf@Sd@Ub@Uj@]\\SJERORKb@YPOd@]NKTQFGZW@ATQ~@}@PQNONOJMLMX]PQX_@Z_@Zc@NSNUz@qAz@wAJQLSLYVe@P_@JSBEPa@Ra@Xo@Re@`@cAb@aA`@cAp@_Bv@aB\\u@N[j@gApAyBh@}@|@sA`AqABEZ_@BCl@u@h@k@JMHGZ]?ANOz@y@XWj@g@@A^[LKjA}@f@_@|@k@x@e@nAs@vAs@nAm@rDgBz@c@bBw@|@c@`By@tBcAbAe@fBy@lB_A\\Q\\QnAi@v@[|@[`@Ot@Sd@MZGd@Md@MVEh@KdAOVE`@E@AJC\\C`AIz@ExAG~@A`A?r@?v@Bf@@T@`@Bt@Dh@D\\B`@BtAL~@Fh@FT@@@P@P@ZBx@H`@BVBXBXBbADv@B`ADl@@hABlC@bB?TAn@AxCIf@Cj@C\\C|@Ev@GXAVCRA|BSdBOl@E|@Ij@G~AK`BO~AKbAKXAdAG~AGDAdAAvAEL?l@?z@AfA@xA@`@@`ABL?H?L@hADnAFZDrAHnBPpAL|BRfCVnALhBP~@H|@HhBRbAHj@DhBRrALtALtAN|BTtALvAL|BTd@Dn@FvANlALxBPZDtAN`ALpATb@Hz@RNDtBj@~@X|@\\lAf@v@^fBx@ZNx@^v@\\RJz@^bBv@PHFBFDnBz@LFFDNFRHNHRHh@Vp@Zp@ZvAn@JFPF~@b@`Bv@j@Vx@^@@D@ZN?@B@THb@Tf@TVLTJRH^PTJJFPHZNt@\\NHJFbBt@DBd@TVJB@B@TJJF^Nd@Td@Tn@XLDf@RPFl@Ph@LZHf@J`@FLBVBPBN@TBN@H@J??@F?`@@j@?\\@B?X?NAP?DA^C^Cn@GNAPC\\Et@IJABAHA^GLCHCLCHCNEHCFCDA@ADAHGPGLEJAJELCPGFAHCB?BAVIb@KZIJCLCNEJC`@KLCPGLCnAYDABARGXKFAFCZINCLEFAJCJAh@Kn@IHCF?NCHAJANCZCRCTATCRATATAPAVApA?T?f@@^?T@F?p@Bl@Dl@FN@jANlANB?d@Fj@HpANRBVDh@Fh@FVBf@Hh@Fh@Fh@Fh@FRBXDf@Fl@Ff@Ff@Dj@Dh@B\\Bl@BL?l@@^?`@?b@?V?j@Ah@ApAG@?x@GVAdAGr@Er@EnAGXCXA|@Gj@Cj@ErAIbAGtAG~@G|@GTA^Cj@Cl@Gl@GNCZCx@OTCHCREr@Ol@Qf@Od@QJE`@OZMJELGLGf@Ub@Uh@Wf@UZQp@[\\QJERIRGLGHCFCBAHCTIj@O\\Gb@GXEPCXCTAP?b@AL?H?rADj@Dd@Ff@Fz@N@?l@LZFH@TDRDv@Nh@Jn@JTDXD|Cj@B@VDlB^n@JXFp@LN@\\Fd@D\\BP@H@V@d@?D?H?P?fAEr@I`@EVE@?LCJCTGzA_@NELCBAjCs@fAY~@U`AWxCs@BA^K`@K`@Mb@K`@Mb@M`@K`@MfBe@hCm@@AfCm@~@Kb@C\\AVAJ?RAd@@V@L?L@D@d@DXBb@HTFF@ZH`@JZJPHXLLFNBr@`@LH~@n@b@\\b@^\\ZXT^\\h@d@HFb@`@XXNLJJb@`@tAnADBd@d@`@\\^\\~@z@f@b@`@XTTp@d@jAn@t@\\dA^TH\\J\\Hf@Jf@H\\FXBdAHD@\\B^@|@Dp@Dp@D\\BZBxGj@tD`@bANLBRF`@Lh@P|@X`@Nl@RTHb@LZLf@N`@NZJD@b@LXJXHVFRBTDp@Hd@@F@|@?d@Ab@EXCh@Gl@IhDo@bASb@I`@K^IRIf@MpAi@^QZQx@e@dAw@TSt@o@`A{@VW~@}@HI`@_@~CuCFGtCkC^]\\Yz@u@z@u@tDeD~@}@|@}@NKXMRMJEDAVMTIFC^KNEVGTCREn@Iz@I`@Et@G`AIb@EZCDA^EF?NCl@GNCTERETI`@K|@[VMVM\\Qb@YPM@Ah@a@ZYLMf@i@PUJMPUPWXa@Zc@`@i@LQPUPQRS^]JITQTQJGBAd@YNIVK\\OPGPE^K@?NE@?RETCZCRCPARAR?XAR?l@AXAN?`A?bCCbA?x@AV?RAx@?^?H?X@r@DPBH?VDRBPDr@PPFRF~@^HB`@P?@TJRHVLJDVLTJRHTLTJTJRJNFRJLDDBPJVJTJRJPHRJB@PHNF@@RJRHTJVLPFRHTHTHRFLDFBRDTFRDRDLDhALN@\\DbAFH?xAAjAGD?PAPCNAF?^IFAJCD?REREFALCREDANCVGPETCLCDAVERCRAVCPAVAR?P?@?T?R?T@R@TBJ@J@RBTDPDRDNBB@RDRFTHRHDBVNZNTNPJVP@@d@^l@l@^\\RVjAxAhAxApBzBZ^Z^bBlBfApAZT|@r@\\Xb@ZvAfAb@Z`@Xf@TPFB@f@Rl@PfB^v@JD@\\DB?D@Z@j@B`@@p@?dACxCYrBSdCc@XGFAZEj@KbCc@b@GtFaA|@Sh@MdA[NEJCDCb@KfAW^Kb@KhCq@l@Ml@OfA[TI~Ag@f@Ih@Ml@Oh@Mz@Uj@Oh@Oh@ONEFAlBq@XIt@WLG^SFCd@Sn@a@j@c@~@q@j@s@DERU@A?AZ_@JOd@s@Vc@h@{@fA}Aj@y@l@{@j@{@X]VW\\_@p@g@v@g@XSPKZQRMBAVMJGf@SPIf@Sf@Ol@Sp@QvDgAdBg@LCPGlA]hA[DCr@SJCLCn@Sd@OPGTGPEDAbAY^KpCs@LEf@OLEJCREHCPCHAh@Ih@G@?l@I\\EhAOj@EdD_@bAK~AQ|Cq@h@MHCBA^OhBs@nAs@DCVSRMNKTKRMPIRMBCLINMRO\\Yh@g@f@e@XYVW^c@TW?AJMJMV[T]FIRYZg@R[LST]R]lAqBHMh@_ALSfEiHFKNYFK\\i@JQR[`@w@JSj@mADSJYPm@FORw@TeAN_AFa@PyADe@BW@Y@GR{FB]FwBFcBBq@Bq@NsDLkDRyF?QLwD@q@DoANiDHo@d@yDb@yAF]t@aC`@aAb@_A`@s@JOPYDKJQHOLS^s@FMFGNUPWRWVWRWZ[POTQLKNM`@WNIRKRIHEPGNILCXILCJE@?@?f@K\\EPAf@G`AKf@GTC|@Qd@KDAp@SDCd@Qz@]LGpAi@^Q`@ORITGPGJCFARETEh@GF?JABANATAh@Cb@CH?PA@?h@Cf@C@AR?TCd@AHCd@E\\GJAPERG^Ih@Sn@c@vAy@PK~CeBFGPGZMJELEZI\\EPEDANCZEXE^GjAKjAGRAxCS\\CPCd@Ej@GdAGFAxBK|AKRAFANCLARAN?p@Ab@E~@E|AAF?J?R@P@J@XBJ@LB\\DF@NDH@\\HJBPDNFJBLDF@LFRFD@PF^JVJJDFB\\N\\NJDTFND^LDBZHf@LXD\\Dr@FN@P?F@R@V?N?HAF?NCTCh@K~@SfA[zA_@?AvA_@LEb@KHEXG`@Mt@SnA]rBk@hA[r@Uf@Qb@Q~@e@XQ\\WXQVUjAeA@Cj@i@RQrBmBDEpAiArAcAJIb@[BAf@Yx@e@|@a@p@[TKTI`DgALCTG@At@U`@Kb@MHCDCNEp@U~Ak@v@_@|Ay@j@YFEBALIrDmBPIHEb@U@AJGPILIjAo@nAw@`@StAu@j@[r@_@^UDCb@UTOZUJGPQPQRSVYLOV]`@m@h@cAZo@Pg@^uA`@mBTsALo@F_@BM@OLsABW@WJkB@{A?A@q@@q@MaMIkDCoA?S?o@?{AHwAPoBJ{@v@gDTaA\\kAVq@|A{CzA{Ch@_B^qALi@^_BNs@RqAZoCJw@Lw@jAmIHm@?AHWBGBIh@wAL[\\y@Ve@HMHMFMBC`@o@HKZc@`@a@f@e@Z[`@Yd@[b@[z@k@HI@AXQBCFEVOx@m@b@[XQ@ABCFCRO^Wh@]ZSTMTKXMb@S`@QdBo@DA`@Kh@GVC`@C@?bAGXCH?|@G|@GT?lC?jB?nELrFAlDI`EUdD]TCFClCu@hAg@lAo@n@a@lC_Bp@YjAY`BO|ACf@@d@@xEj@fBHL?TAb@EVCLAHAl@Ij@Ob@QDCBA^Mh@WZS\\SbA{@~BaDdBgB\\a@\\a@bAsAz@gAh@u@lAgBPUjAuAn@u@LQJK`@a@JM\\]PSrC{CRQt@q@^Yp@g@LIh@]x@c@HE`@SfAk@RKf@Wh@S@?FCVGBAVGFAnUuAdLs@dAAnAEd@EdAGfAKZCTEh@KRE^G|@M|@MH?d@B`@Dj@Al@A`AE|AIt@CbACn@DtAJnBd@dB|@l@f@^Zd@d@`@^RTJLLPVXNVp@x@Zh@b@t@|KnPlA`Bj@~@V^HNNXDHV`@BBRZHPFLP`@NX@DRh@DLH^Ld@@DJl@BPF\\H`@Hz@@HFd@Fn@D\\BRBV@V@T@Z?p@@p@AdACnAEp@Cf@AHGn@?@U~AAHQ~@Kd@St@Qj@GVGP[fA_@~@CFi@dA}@hAi@h@c@b@g@`@g@b@c@`@c@f@]f@GHQXw@|Ao@vAYv@[v@EPMh@Ot@O~@Ix@CNOjBGbAO`BEn@Gr@En@CZATEn@?DEj@?NC`@?@AP?\\?@?h@?F?`ADrA@\\@RDp@@RLjADb@XjBNl@XdAFRb@tAL\\DJTf@Xn@R\\Xd@@BTZXb@@?PX`A~@JFPRVPFDv@`@XRd@Xb@Vd@\\XPPJRJNBVFb@H\\D^B`@?\\?`@Aj@ETA`@E\\KLEr@Up@Y|@e@ZQbAk@lA_ATQf@g@h@o@TYV_@`@s@l@mADKPc@d@iALe@Nm@Pk@DOF]DMNkA@CFq@Fo@@EDk@Fk@?EBq@@S@]@o@?AAq@?M?c@AWAYAg@AICo@?AEi@Gw@CUC[CYEUYsCAa@GcB?ACwA?K?q@@q@?I?s@@e@Bi@?GDq@Dq@Dq@BoAF{@Dq@Bq@Bi@@GBq@HcBN}BJuAJeABe@DWBOJy@D[Py@DOFUDORs@Ja@N_@@GFOz@kBJUN[DG?ATa@@AXa@LQ@A@AHKZ_@Z]Z_@NQPQl@i@\\YDCBCTS\\YHG\\YXWPMv@o@JIVQTQ`@_@BAFETSFGFENKTSFE@ABAVS@?NILI@A^Q@A\\M^OFAPELENERC@A@?`@Ep@Ih@EJABAD?PCFALCTERGLCVKTINGVMNIBCBAFGHKLKd@e@\\_@PSl@y@h@{@"
                     },
                     "start_location" : {
                        "lat" : 45.2477211,
                        "lng" : 8.459935399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "31.2 km",
                        "value" : 31173
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1223
                     },
                     "end_location" : {
                        "lat" : 44.2942297,
                        "lng" : 8.446309700000002
                     },
                     "html_instructions" : "Take the exit onto \u003cb\u003eA10\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE80\u003c/b\u003e toward \u003cb\u003eVentimiglia\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTorino\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kpenGg|it@NGLKV_@nAeBFIHKBCJM^a@RO@CNM^SPIHEVI?Ad@KHCVEDAB?@?@?VCFAT?D?R@B?D?l@DF?PEbAX`@HTDVFJBH@D@D@@?J@NDb@HhAPr@Nv@L`@JLDp@V|Av@@??@TJLL\\X\\Z\\X@@ZZPPHLX`@PT^l@n@lAHJJZLZ\\bATjAFP?BDPLb@H^X|AP`BFf@BN@J@FHh@XzAF\\DNLl@J`@BJPj@Nj@DLLZBH@@L\\BHd@~@`@t@b@t@DFX`@f@n@f@r@jA~A?@x@fAV^@@Z`@X^t@`A^d@VZNRHLHJNTT`@b@v@Tf@f@fAn@xADHHNFNr@bBb@`AXn@Tx@FX`@vBTxA?DBj@Dp@B^?N@r@@j@AjAA\\KbBIbBEn@AXSlDEp@g@lJEpAEp@A\\EtB@dA?R@d@Bf@Br@Df@BP@JBXHp@Hf@FZJn@Ll@Nl@Pl@HZVt@Xn@LX@@?@JRFP@@Tf@BFN\\d@~@\\x@NZ|@tBZx@l@zAt@tB^hA^hAPf@Xz@xAhEJZLd@@@Jd@T~@Jj@Px@DZVfBLz@Fn@Fr@@L@\\@\\DjA@V@X@V?JBh@Bd@B`@B^BZBb@Df@JjAHp@Jl@Nn@b@tARd@JX^t@DHl@z@BBjA~An@l@|AlAt@p@tAlAd@j@b@l@NTNVVd@Vf@LVPb@N`@JVJZDLHZLb@FVPx@Nv@Lv@Lz@j@fDPjAJn@r@jE?Dr@tFpBlODb@@DDZ^vCp@dF@Hl@zEh@dDDX?@DZTnB@R@@BT`@lDZhCLt@BTBNDVBNVpAHd@DTFTLt@J`@Rr@nBhFdBnENZn@bBbBhEFN@@DLv@rBHPFNvAxDFPDL?@t@bCRn@?@DLj@nBFXx@vCfA|DBH`@hAp@`BVh@@BXj@~@|Ad@t@tAvBTXj@z@BBXb@tBbDDHXd@BHh@|@h@~@f@bAJPFNFJFL^v@n@tAFPb@|@`@|@Z|@`BpELd@Nd@n@zB^rA\\pAh@rBNp@@@Nl@j@pBXnABJNj@Nl@lA`FNl@Nl@Lj@Rv@ZnA^zANj@H`@bA~D@FLd@`@vA^xAPj@h@nBFTPp@H\\J`@Px@@@DTDVNdANtBDx@Fp@H~@LhDD`H?xE@b@?b@@n@@fA@r@@p@?Z@^@h@DdABZBh@Dn@BLHz@BR?@F`@BLHd@RrAPnA?FPnAF`@NfABP?BBRFf@Ff@Lz@Nx@Lx@Lz@VrBDX?B\\pB?@Nh@ZrA|A~EVj@~@dBHVHTFRFNFPHNLTNVXb@zA|CTd@Tf@l@lATf@Td@JTHPFJd@bAj@lATf@vA~C|@lBBFl@nA`AtBd@dAd@|@d@|@`@v@Zj@f@bA@BFJ^v@f@hABDj@dA\\h@@BHLLRb@n@TV^d@p@r@^\\f@\\h@ZfBv@bCbALDDBt@T|@V`@Hp@Lr@HtBHjAGtCIxBGt@CfAO`AGvAAr@?b@AlCKb@Gb@Iz@KVAd@Dj@NZJh@Tv@PTFj@Xf@Vn@b@RNRPVRDDHJLLFHBDHJVZz@lATZV^JPZf@T\\NVPZNZLVTh@HPDJDNFJJZR~@DPf@`C@FXnANr@L`@DNPn@Tp@Zz@^z@Rd@JPLVvAfC\\p@Zl@Tj@N`@Tr@DLH^BN@@BLN|@Jp@Hr@DbABr@Br@D`A@f@Dv@@p@Dr@Bv@DlAFnAFr@Fr@Jx@JdAVjBDTBNNx@Px@?BTfAFTHTFTH\\r@xBVv@HVBFN\\f@xAJXVx@`@jAn@xBNl@FTH\\BHLh@Hh@Nz@Jp@RxAT~ALx@NjAVbBVbB@JVfBx@bGx@vFBR|@hGb@|CRbBFd@VhB?BRdBRhCNrCDrAAlA@n@?|@Az@Az@A`@E|@?TCh@En@EbAOtAIz@OdBABYzBAFYvAEf@Kn@WjAMh@Of@IXYt@_@jA[|@k@xBWt@a@xAa@vA[fAUr@[z@Kh@s@pCMd@Qh@ADCHMb@IZEPKl@QhAMfAALEb@CVCh@Cd@Ab@?d@AfA?p@DnABf@Dv@Dr@Ff@BZDPBZF\\Nx@R`AH^Pp@FTJXJVLTHPFJFLLRJPHJ?@LNJRjAdBHJZ^HJr@h@XTrAv@p@`@`B`A^TzBtAFB|@j@h@XtDvBfAn@`@T`Al@bCxA\\XNJVRPLh@ZXRHFVP`@TdAr@VR\\VPPRRHH@@PNBBB@DFTPB@?@LFd@Vd@XDDLHPPPN@@NLTT\\\\XT\\VRLXP^Pj@\\vAz@LNFDfAt@n@`@LJp@d@f@^VRp@h@z@l@z@h@`Ap@d@^l@d@v@h@NHZRn@f@`At@ZX`@`@TTh@l@r@v@PVZd@^p@v@pAN`@f@nA\\z@DHNh@Nd@\\~ADRPjAL~@@PRnC@JDRBPD~@@\\?\\DxBD`C?DB~@HzD?FHrDBj@@h@?T@TBx@@R@v@HfD@b@DvBB`B?XFfAFh@BXFb@Hp@Nt@H\\FRJ^HXBJPd@HRDJ?@DJBBZr@HLDJ@?DHNVTZRXNPFHLNPR\\\\bA~@tGxFFFj@b@JJ@?LJxCjC\\Z|BlBXTv@n@@@B@?@HDp@p@b@`@t@p@Z\\f@b@|@dAHJFFFFHLz@fAJLLRbBlCj@`Ah@dAj@hAZt@h@rA@?Rh@Rh@Rj@DLDLHXVv@Nh@V`ABFd@nBh@vCf@`DBVHn@R`BHn@BRB\\Dl@JjA@FNrBxA`SBd@LfBHfABTL~BJxALbBL`B@JFd@Fn@R~ADTBXFp@LjABPBNR`Br@pEL|@d@fDD^L`A@LBLH~@RbBHx@Jz@Hx@LbA?FJt@Ht@Hv@Hx@@LJrADp@Bn@Bj@Bj@?F@x@@P?P?p@?z@?j@AJC`BIbEA`@?@A^Ax@Ch@A\\A\\C|@ErCAjAAx@?t@?P?@?T@^?D@T@p@@H@TBVFt@Fd@Jt@Jn@Jj@J`@Rp@Tn@L^Tf@JTP\\@BJPVb@Zb@RVf@l@HDxA`ALFDBTLXP|DxBj@ZJFJDPHPJj@b@VTZXTTHFb@b@d@j@z@hALNZ^DFRXrC|DhBfCXb@~@nANTzBxCZ`@JL`ArA@Bd@h@b@f@DHBB`@f@@BDFRZ\\h@TZT^@BXb@@B@@JLJJlAvAh@v@HLDFd@r@v@tAn@vANb@Rl@BJ@@DLNj@R~@Z`BBLL|@VnBNfANdABRHr@NrAN~@XtAJd@BHBFBHFT@B`@nAt@xB\\v@Vl@LVNVJTXd@JNR\\^f@f@r@DHRZx@jAr@`AHJb@p@`@p@Zn@LXLVTl@JZFVHXFV?@H`@DVF\\@BFb@@JFf@JnA@ZBT@XB\\@b@@j@@l@Bh@@f@DvA?HB~@B|@?@BjABx@Br@@P@b@Fh@Dj@F`@NdALn@Pt@J^JZFRL^N\\Tf@LVNX^j@NTTXLNNNNNVVXTTPRJPJd@Th@T`@Pn@^n@^p@\\xCnAtAp@t@\\TJJDd@Rh@Vx@`@XLb@Rh@VDB`@RJDZNPHj@X^PZNd@Th@VfAf@bAd@dAf@@?j@ZDBRLf@XRN^TPNPL~ArAdAbATRn@v@NPd@j@j@x@X`@^j@T^Xd@`@t@`@|@Vh@Rd@@BHPFPRf@JVBFBHBDNd@DLTr@^nABHHZPr@Pt@FXH\\Lr@Lp@D\\FXD\\D\\NnANpAD\\Fr@Dj@@J@N@J?H@N?H@RJ|AXlFHbBJbB@`@B\\F|@?@Dx@@H@RB`@BRB^@DBVBNJ~@F^F^?@@DJp@Np@Pv@Rt@Vx@Pn@JZLZL^Vl@JTNZTb@T^Zf@h@v@^b@RPRR\\^FH^b@PPt@f@`@Xb@V^PZNLFv@Zj@PXJZHXFXDTDz@FVDTBV@R@\\AnBF|@Cv@AL?lACB?`@?\\?F?n@DT?V@TATCTC^Cf@CX@FA|@?`@?d@?r@?"
                     },
                     "start_location" : {
                        "lat" : 44.4341426,
                        "lng" : 8.7393985
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 514
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 44.2901021,
                        "lng" : 8.444023
                     },
                     "html_instructions" : "Take exit \u003cb\u003eSavona\u003c/b\u003e for \u003cb\u003eE717\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eA6\u003c/b\u003e toward \u003cb\u003eSavona\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTorino\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}ejmGmtpr@l@Fd@@h@@x@@H?v@DZBJBXBZDr@ND@VJ^Pb@RFBTNPJPLRNNLPLXVPN`@b@@BTVNPTZ?@HJLRFLP\\T`@"
                     },
                     "start_location" : {
                        "lat" : 44.2942297,
                        "lng" : 8.446309700000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1064
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 109
                     },
                     "end_location" : {
                        "lat" : 44.2868229,
                        "lng" : 8.442201899999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eSavona\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "climGcfpr@JHLTPZ@DLXP^@B@DRf@Nd@ZfAJXJZHVRp@HVFNFZ`@tAPj@@@Nh@\\jABFFTNf@DNh@fBZbAX`AV~@@PBH@D@J@F?D?H?B?B?D?BAD?@ABADABADCDABCBCDEBCBC@C@C@A?A?A?A@G?G?GAGAEAG?EEEECGCECEAEAE?CAIAI?I?G?I?G@G@I@GBIBIBGDGDIBEDEDGRQ@A^W|@o@HIHGNONOJOJQHQDKDMDOFQBQBK@KBQD]@Y?g@Be@CcBCaBBm@?K"
                     },
                     "start_location" : {
                        "lat" : 44.2901021,
                        "lng" : 8.444023
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1671
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 123
                     },
                     "end_location" : {
                        "lat" : 44.2745433,
                        "lng" : 8.433808599999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eVadoligure\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eQuiliano\u003c/b\u003e and merge onto \u003cb\u003eStr. di Scorrimento Veloce\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "swhmGwzor@HO@C@A?AAI?QCY?I?CAI?I?G?G@E@E@C@ABCBADAB?F?D?D@@@B@DBDDBFFH?@@@LFDTFXDLHVDJ@BBHJRZh@FFRVRPJHLJPJNHj@Rj@TXJVJPH`@N\\LNFbE~AJB@@B@LDLDTJTH^Jh@L\\Fn@JN@P@L@B?L?P?b@?V?V@N@\\F`@LRH\\PLHHH^ZRRJL@@FHRVT`@JV?@LXFPTp@h@~ARd@P\\V^VVRPNLPHXNx@^NHrAl@p@Z`@RB@dChA|@^XJ\\N^Nh@T\\NLHJFJHXX@?d@n@?@HLFJLXJVRn@BLPh@"
                     },
                     "start_location" : {
                        "lat" : 44.2868229,
                        "lng" : 8.442201899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 273
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 44.2760694,
                        "lng" : 8.434450499999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{jfmGifnr@AL?DABCFABIL_CfBOHQJE@EAGAECECCICGk@yBAGK]GYEUAEI}@"
                     },
                     "start_location" : {
                        "lat" : 44.2745433,
                        "lng" : 8.433808599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 552
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 44.2725714,
                        "lng" : 8.4388515
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eVia G. Ferraris\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eGo through 1 roundabout\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mtfmGijnr@VMbAe@`@Q^SNGDCHIFCVS@@@@@?@??@@?@?@?@A@?@??A@??A@??A@??A@A?A?A@??A?A?A?A?A?A?A?A?A?A?A?AA??ARU~@}@`AiAr@u@HIl@s@d@i@LOLOLWZgA?ABIh@}BF]\\_B"
                     },
                     "start_location" : {
                        "lat" : 44.2760694,
                        "lng" : 8.434450499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1485
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 181
                     },
                     "end_location" : {
                        "lat" : 44.26167239999999,
                        "lng" : 8.447601499999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSS 1\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "q~emGyeor@h@NZFTBp@FR@P@ZANAHAtAO`Aa@\\OPGp@Wv@]VMnAm@d@UvBaA`@SrAk@r@OlAi@JEDCzAm@`Bo@PGzCkAnAg@HGHEFEJI^[PO@CVYHKb@w@t@}A^}@`@cA\\y@Xq@bA{Bn@}A~@wBx@mBZo@b@oADE@CFOF_@BS"
                     },
                     "start_location" : {
                        "lat" : 44.2725714,
                        "lng" : 8.4388515
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 44.2621225,
                        "lng" : 8.447808199999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "mzcmGo|pr@@??A@?@A@A@A@A?A@A@A?A?A@A?A?A?A?A@A?A?A?AAA?A?A?C?AA??A?AAA?AAA?AA??AAAAAA?AAA?AAA?A?A?A?A??@A?A?A@A??@A?A@?@A??@A@]PIAGAG?E@"
                     },
                     "start_location" : {
                        "lat" : 44.26167239999999,
                        "lng" : 8.447601499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 314
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 107
                     },
                     "end_location" : {
                        "lat" : 44.2630637,
                        "lng" : 8.447878100000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g}cmGy}pr@?U?K?O@K?ADYReADUBW?ABW?G?GAGAEAGAECECECCACAACCECCACACAEAEAC@G?A@C@EBCBEBCBCDADCDAHAJARE`@ALAPI\\EPGNCFGHQXEFSZQFA?G@"
                     },
                     "start_location" : {
                        "lat" : 44.2621225,
                        "lng" : 8.447808199999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 112
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 44.2634799,
                        "lng" : 8.4468675
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ccdmGg~pr@A??A?AA??AA??AA?AAA??AA?A?A??AA??@A?A?A?A@A??@A?A@?@A@A@?@A@?@?@?@A@?@?@?@?@?@?@?@@??@?@?@@@?@@@?@@?WrAAPWz@"
                     },
                     "start_location" : {
                        "lat" : 44.2630637,
                        "lng" : 8.447878100000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 185
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 44.2648523,
                        "lng" : 8.448005199999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wedmG}wpr@y@{@AAW]SUGKKQMOEGMOIAEASDSBOEk@k@"
                     },
                     "start_location" : {
                        "lat" : 44.2634799,
                        "lng" : 8.4468675
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "213 km",
                        "value" : 212964
                     },
                     "duration" : {
                        "text" : "5 hours 18 mins",
                        "value" : 19078
                     },
                     "end_location" : {
                        "lat" : 42.7006915,
                        "lng" : 9.4525574
                     },
                     "html_instructions" : "Take the \u003cb\u003eBastia, FR - Vado Ligure, IT\u003c/b\u003e ferry to Bastia\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering France\u003c/div\u003e",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "indmGa_qr@qLyGuCmBaAiA{@qAa@s@e@iAc@{Ak@}Ba@wCUyC?}CJ{APcAZeA\\o@Zm@t@aAd@k@BC~W}[jC_DvfKacMrjLiiN`pL{lNxiL}lNhoKesM`lLetNrtKcaN~dLcpNvqKglM|mDysDp{KcvJ~yNkmIbzNolIhzNskIlzNujIpzNyiIvzN_iIpkMwCxkPwDxkPyDvkPwDzkI~jEzOnk@iIphJsX~aAgEfOuA`Fm@|@aFtHyETeEPu@?}EEo@Pa@r@}CbFCDA@"
                     },
                     "start_location" : {
                        "lat" : 44.2648523,
                        "lng" : 8.448005199999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 42.7013077,
                        "lng" : 9.4530709
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "i~rcGoeux@GFE@G@C?E?E?EEAAEEM_@OWMUGISK"
                     },
                     "start_location" : {
                        "lat" : 42.7006915,
                        "lng" : 9.4525574
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 587
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 42.7063267,
                        "lng" : 9.454997199999999
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ebscGuhux@ECUOq@UgA]UIqAc@eBm@_Cy@GCCAu@c@_Am@KE}@]sAc@QEGCC?EAE?EAE?A?I?}ADgAB"
                     },
                     "start_location" : {
                        "lat" : 42.7013077,
                        "lng" : 9.4530709
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 160
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 42.7066636,
                        "lng" : 9.4533401
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qatcGwtux@WKG\\AJADADCHELCHAJG\\C`@C^AN?R@T?R@f@@R?H"
                     },
                     "start_location" : {
                        "lat" : 42.7063267,
                        "lng" : 9.454997199999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 485
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 42.703294,
                        "lng" : 9.453185999999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e5th\u003c/b\u003e exit onto \u003cb\u003eViale Pascal Lota\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "sctcGkjux@G?E?E@E?EBMN?@A@?D?D?D@F@FNPD@D@D@B?FADAFAFCLIFAF?J@H?D?JAJCPGd@OZOXMJGHEFGHGHIBCFIDIDMJMJOFGDEDCFCDAFCFAH?D?B?B?F@FBLFVLj@VpBbA\\Pj@X"
                     },
                     "start_location" : {
                        "lat" : 42.7066636,
                        "lng" : 9.4533401
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "38 m",
                        "value" : 38
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 42.7029684,
                        "lng" : 9.4530505
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "qnscGmiux@z@XB@"
                     },
                     "start_location" : {
                        "lat" : 42.703294,
                        "lng" : 9.453185999999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 261
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 42.7007195,
                        "lng" : 9.452131399999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "qlscGqhux@RFh@PHBD@ZJNFr@VZL@?XJFB@@VHFBj@LD@VFb@HJBb@LRH"
                     },
                     "start_location" : {
                        "lat" : 42.7029684,
                        "lng" : 9.4530505
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2817
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 270
                     },
                     "end_location" : {
                        "lat" : 42.6781347,
                        "lng" : 9.4459588
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eT11\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "o~rcGybux@nCd@HDB?B?D?F?FA`@IHADCLEXMRGFCLIRS@ADMPODEBENONIHEJGJCHCFAF?`@AxAHlEV\\BD@h@F|@Rb@NB?\\LB@d@H\\BL@Z?\\AH?|@CPAt@EhBKB?^ALAT?^@N@TBFBPBD@TFLFPFb@XLJFDLLFDZ`@BFHNFJLVJZXdAJ`@Pr@J\\L^BDFN^z@DDDHFJDFB@JJFDFFFDFFHH\\d@FLBLBHJd@h@hCHTDHBFDF@@HJFFBDDBJFHBF?@@B?D?DAD?BA@?@ADALERKRKRKHCFABADADAFAF?D?F@D?FBF@FDHDHFFFPRb@j@RP`@TvAv@xBdAhAj@B@LDNFJBD@J@J@P?JDR@\\BDAHCDEFGN[HONUJKJGPITIPANAL?P@RBVBVDXB^@P@bCCjCE|AAbACv@An@?\\Ap@EXC\\G`@Gx@SZE`@EVAX?P@F?B@L@ZFVHd@PRPJD^RB@\\TPLLJFFLLNNHJBDFJHN"
                     },
                     "start_location" : {
                        "lat" : 42.7007195,
                        "lng" : 9.452131399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1743
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 140
                     },
                     "end_location" : {
                        "lat" : 42.6635646,
                        "lng" : 9.4421553
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eT11\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "iqncGg|sx@HLDN@BDL@BDLDNDL@@FV@BDNFRBDDLBLFLFLFLDHBDJJDDDDNJTNHBH@XF`@F@?\\Bl@DXDVBJ@b@BD@r@HJ@z@FNFNBV@z@Dz@FLBf@Bx@FL@^D`AHlBLRBbBLXDJBFBDDDBDDBDNVHNPXFLR\\JJBBBB@@@?@?@?@@@AB?@?D?D?DAFCFEPMXg@PYHKDCFCHEF?H?J?P?vBPrALtALfAFb@BF@ZBt@DzAJdCTt@FfAFx@FrBNrAJ|@Fx@FTBX@N@LBFBNFFDNNPT"
                     },
                     "start_location" : {
                        "lat" : 42.6781347,
                        "lng" : 9.4459588
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 773
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 42.6567073,
                        "lng" : 9.441414399999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eAv. Sampiero Corso\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eT11\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "gvkcGodsx@@B@BBBB@DBD@R@FADCDCJEVSLGDCJAH?F?N@\\DV@lDXZBh@DZBl@Dz@FVBvAJbAH~AJt@Fp@Fn@F`BNnBLr@FdAJJ@"
                     },
                     "start_location" : {
                        "lat" : 42.6635646,
                        "lng" : 9.4421553
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3107
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 164
                     },
                     "end_location" : {
                        "lat" : 42.6289586,
                        "lng" : 9.4374471
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eAv. Sampiero Corso\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eT11\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow T11\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "mkjcGy_sx@BC@A@?D?D?D?hCP@?xFb@bAFbAHnDXtAJx@FN@fAJ\\DFDV@`AFjBL`@DZBF@b@BZBF@~@Fn@FN@PBXBF?`@BVBJ@`AHL@fAHrAJXB`@BrALbAHp@DXBb@BlDXr@DdBH`ADT@l@@fABb@@b@Bb@@b@@V@J?b@Bp@@|@BvADlABh@Bd@Hj@Nz@ZRHl@P@?PDP@B@nCT~@D~ALJ@bBNN@B@B?`BLjBNb@BTB|@HX@VBb@BzALb@BlBNtALh@D`AFhBNf@BTBjBLl@DXBj@DXBb@DJ@H@bAJh@FhBPhBP"
                     },
                     "start_location" : {
                        "lat" : 42.6567073,
                        "lng" : 9.441414399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 735
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 42.62249,
                        "lng" : 9.436821399999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eT11\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "_~dcGagrx@@F@B?B@BBB@B@BBB@@B@B@B@B?@?@?@?@?@?@?@AB?BA@ABC@ABC@C@C@CLCDAF?H@D?V@d@Bd@BN@~@H`BJ`@Dj@DrBNfCPjAJ|@Fr@FVBR@l@D`@@f@?nACfAAH?p@A"
                     },
                     "start_location" : {
                        "lat" : 42.6289586,
                        "lng" : 9.4374471
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3092
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 157
                     },
                     "end_location" : {
                        "lat" : 42.59477649999999,
                        "lng" : 9.438517899999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eT11\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "quccGccrx@BEBCDA~AEF?p@Cj@At@A`A@V@tB?@?bAIl@I|@IJArBOHAD@~@GD?D?`@Cr@ClAC@?B@@@?@d@AjACh@CVAj@Aj@ABAX?n@CNAn@AbAGX?b@CH?@?\\A@?ZAn@CxAEh@Cb@AtACvAGRA^AB?JAB?h@AfBGp@ARANAh@AzBGjAErAE`@Al@Cd@Cr@CXAt@AdAE|AE`CIL?b@CF?\\Av@Cl@CV?pDMl@Ax@CvAEB?bBEXCrACfDK`ACfAEf@CH?v@Ct@Ct@C|@Av@Cx@ClAEjAEpACFAn@A|BIJAz@Cd@AFA~@Cd@AJ?XAT?V@NBNDLDPFPHVJ"
                     },
                     "start_location" : {
                        "lat" : 42.62249,
                        "lng" : 9.436821399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2665
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 122
                     },
                     "end_location" : {
                        "lat" : 42.5711439,
                        "lng" : 9.4411679
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eT11\u003c/b\u003e heading to \u003cb\u003eAjaccio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAiacciu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBonifacio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBunifaziu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCalvi\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBorgo\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU Borgu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePoretta Aeroport\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePuretta Aeroport\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "kh~bGwmrx@BD@DBD@BBBDBB@B@D@B@D?D?BAD?BCFEBCBEBC@E@E@E@E@ENMHGJGLGFCNEPEXApAGf@AZAZAN?zCKrBGR?fBGp@C|AEzAEn@Cn@Cl@A|@E`BGtBG@?dACrBGnAEtAEtBIl@Aj@C|AC|DMn@C~AEbAEN?nAEbACxAGb@AhAEfACx@CjAE~@ED?h@CZA@Af@Cn@El@ENCTALC`@ENCbAMrB_@`ASbAQr@MVCh@GVCb@AHAn@?dABx@BpADbADx@BL?T?X@j@AVCTANC`@I^IDC^MTIRKVOHETO"
                     },
                     "start_location" : {
                        "lat" : 42.59477649999999,
                        "lng" : 9.438517899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4457
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 161
                     },
                     "end_location" : {
                        "lat" : 42.53925659999999,
                        "lng" : 9.4570864
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eT11\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "stybGi~rx@HGPONOVYX]T]@CLSLWRe@N_@@CLe@Ja@H_@Hc@F_@BWB]Da@D{@@g@Bo@BaAD{A?YBo@@o@Bq@DaBDyBB{@HyCFuADcADg@Fk@Fg@Fe@Hi@Hc@Ry@Rs@Vw@Vo@Xm@\\q@`@o@^g@X]TUVYRQDCZYZSNKd@WJELIPI^OZKl@UPGbA]JETG`@OdBk@XKTIRI`@QZOl@WPKj@[|@m@x@m@d@[rB_Bd@a@b@[XUzAmA\\YTQHGf@_@RQ|AiAb@_@v@k@\\Y\\YxBcB^[DCTQVQt@e@f@[h@Yz@c@j@Wf@QVKXKh@Of@Ql@Mj@Mj@Kj@Ij@In@Gh@CbAIbAEfAGrCMbBKxAGZA\\CvH_@H?NAdIa@b@CRAT?d@AdAAx@?J?bABbAFbAHVDj@HZDh@Hl@NPDPDXHF@d@LVFh@R~@^~@`@h@XTJf@X~@h@~@f@fLpG~@h@`Ah@zBnAr@`@"
                     },
                     "start_location" : {
                        "lat" : 42.5711439,
                        "lng" : 9.4411679
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 42.5377321,
                        "lng" : 9.454583299999999
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eN193\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAjaccio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAiacciu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCalvi\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kmsbGyavx@BJBDDDDDTPLJDDJJHHFJFJFN@BDPFRFPLj@Lh@Ld@BLLh@JXFN@BJJ@BHHJFf@Z@BBBHP"
                     },
                     "start_location" : {
                        "lat" : 42.53925659999999,
                        "lng" : 9.4570864
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1627
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 99
                     },
                     "end_location" : {
                        "lat" : 42.5310737,
                        "lng" : 9.4421163
                     },
                     "html_instructions" : "At the roundabout, continue straight onto \u003cb\u003eD10\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ycsbGcrux@?B?@?B?@?B?@@B?@@B?@@@@@?@@B@@@@@?@@@?@@B?@@@?@?@?BA@?@?@A@A@?@A@A@Ch@FLFVLVFVBT@dAEf@C\\Ar@A~@@j@Hl@L|@PnCf@JBb@JxAZp@XTHPRJHFFDDNRBDRTPV\\b@nDxEhChDFJ\\d@NVDLBF@@FRDRBP@NBP?N?L?NCZCZMrAOxAGr@QfBOtAGr@Ix@K`AE`@Ed@AXCZC^?DEd@Eh@E`AA\\AT?FAR?ZAR?NAh@?RAzAAxB?j@E~@"
                     },
                     "start_location" : {
                        "lat" : 42.5377321,
                        "lng" : 9.454583299999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1349
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 103
                     },
                     "end_location" : {
                        "lat" : 42.5195439,
                        "lng" : 9.439953599999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eT20\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ezqbGgdsx@C@A?A@A?A@A??@A@A??@A@A@?@A@?@?BA@?@?@?@?B?@?@?@?B?@?@@@?@@@?@@@?@@@?@@@@@@??@@@@?@?@@@?@?@?@?@?@?@A@?@?@A?A@?@A@A?A@A?A@A?A@A?A@A?A?C\\BjALfCZbALdD`@\\FL@TBx@LRBf@Fx@Jt@HtBXnBV\\Dx@JZB`Db@r@JfAL`@Fb@Db@FbEh@HDh@FlANP?X@P?dAEL?DAF?NA\\AN?F@D?L@JBTBJ?P@VAVCF?L?JAN@B?D?D@JB"
                     },
                     "start_location" : {
                        "lat" : 42.5310737,
                        "lng" : 9.4421163
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "25.2 km",
                        "value" : 25157
                     },
                     "duration" : {
                        "text" : "24 mins",
                        "value" : 1420
                     },
                     "end_location" : {
                        "lat" : 42.4622514,
                        "lng" : 9.2064202
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit and stay on \u003cb\u003eT20\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "crobGuvrx@BFBBBBBBB@D@B@B@B?DAB?DANJFDBBBB?@FFNTVh@\\|@LFPd@Rd@LZh@vAPb@N^LVBDJNBFXh@FHNXJRFN@BLXHR?@L\\HXBNBJ?@FZDPAX@HHn@R|ADZDPBNFTPz@@DBD@B@BDDR`ANr@Jp@B\\B`@@\\?J@^AN?`@?NAXATCZCRANE\\EVOfAObAOdACLG^Gd@O|@Ol@IXCFKTWf@Ud@U`@W\\QPUNULSFQH_AXu@VKBy@Xa@JYHUBa@?W@Q?Q@Q@U@ODMDIDOJEBQL_@\\IHMNKNEHOVMX_@t@mCvFMVy@dBSb@_@r@Uf@MVa@z@a@x@[p@y@hBAJAHCN?HAL?N?L@LBRDd@@FDf@Hl@Hn@P|A?BNzA@n@@h@?D?VAP?FAHARAN?@CXANADAJETAJADGZCHIZM^IXEJOZO`@CDUd@Wh@s@tA_@l@[d@]j@SVKNUZUZGJKNOXGJEFGHKPQXEHKRS^ABITABGXK`@GVGZGZAJEVAFAN?B?P?b@@n@?NDr@JbC@P@L?HBP@H@DDLDJBHFHHNdAzAb@l@HJBBBBLJLF@@HDXJb@Nj@Pd@JNBb@F@?B?XBB?D?R@F@PBRHRHTPJJJLFJFL@@BHFTBJFXLn@J~@@PJlA@HBd@FhABV?F@T@P?L?`@?dAAbA?P?f@An@?B?h@AJ?TAJAPCXAHCNETAFGd@AFGb@ERCVE|@CdB?@Ad@?j@?D?j@@~@C`@AX?VCn@@H?F@D@H@H@BPh@@BPh@Tb@V^TXDD\\ZT^d@?b@DL?B@TFPBTJZP`@PPFNBNBF?F?BAD?HAHCFCPGTKPK`@Sb@U@?^U@A\\QHE`@Wf@[VOBAXMBAPIBADAFADAD?F?HAB@F?L@HBJBHFJH@?HJHHDJDJDJDJDVD\\?L?J?PAPEVEXOn@Uv@AFs@nCKh@EVABAFGd@?BIz@Eh@Gn@ATCNG|@E`@?HGn@En@AZAJ?B?N?N@J?@@VBT@DBNBLDH@DHPHPJLFFFDJJHDFD@?B@PDJ@F?XD@?b@BD?P@J@lAHnAF\\DZB^F^Fn@PD@\\Hh@N`@JJBd@LPFXHFBTF^Ln@Pr@TXHD@TDN@J?FADANEFCFCRMROVOXSFEHEVMJELCLANCN@L?`@DTBJ@vARD@b@Ft@JXHd@LBB`@L`@LJFHFHH@@FHJNBDDFDLDLFV@P@F@D?P@LAH?NATG^If@WdAMl@Kb@CJKf@G`@E`@C^Eh@I~AEbAEn@g@nJOxCIzACf@ALAVCb@Eb@AJGd@If@Mh@?DMj@Kl@G^CZCP?J?L?H@TBLDNDRfAlDDLNb@Pj@Pn@^tAl@dCfGjWl@hCNl@T`A?@Hh@DZ@FFz@?F@HBLDLDLRVNHFBFDLFDDDFBBBFFHFL@D@BFLBJDJ?@DN@JBNDZ@P@DDh@NrBPvB?RJfAF~@Dd@Dn@BVN`BLvAL~ABX@DBLBH^~EN`BDd@R|BDn@Fh@Fn@JpA@DFn@Dl@@HBd@?H@D@^@D?\\?VAV?L?FAPATCn@AJCd@AXATCVGl@A@Ij@?@Kf@ABYfA[~@?BCDO`@ADUp@_@hAo@rB]fA]dAABu@zBs@zB]bAOd@Qh@Qj@Yx@e@zAEPCDGTENe@fBIZMh@K`@CHEVUx@Qr@[jACHGN_@lAWn@EJy@bCIVELOh@Kj@Ij@Ef@IjAG`AANIfACf@Cr@Ev@Cf@At@Cv@CpA?z@?r@A`@?l@?\\Bt@@x@?V@d@@dAD|BDfC@`A?@@nA@t@HvC?D@j@DdB?n@Ah@?^@n@Bl@HbAJn@DZBPPjAFj@Fj@Dt@Fn@Fd@J`@HZDJFN@BDLHNHLJLHL@?JJd@^XTLFVFHB^Df@FPBfAN`BRf@Hz@LL@PDLDPNNPHJFLFNDPJj@Jn@Jj@D`@@R@XBf@?V@XD`B?r@?h@ABATCb@Ib@G`@ALANGj@C^Ad@Ar@@xBAb@?XAPAPANAJCJERCNA@Kd@Qr@Mj@Mj@ABGb@E\\Cb@GnB?PCx@?J?T?T?L?R@F@\\Dj@DT@HD`@Hj@?DFb@@HBZ@j@?`@?XAZEf@?@In@Mj@Oh@?@Sf@ADQ`@EHWj@GRCDELIVETUnAMx@CTM|@Id@Gd@E`@C`@?b@?@@`@B^D`@Jb@@DHVL\\b@x@b@n@NVNTh@x@FLx@tAjApBJNFLHNLXJVJ^Jd@Db@?BDf@?`@ATAXCTAJG`@Kj@A@Mj@Md@Od@Qp@Mb@EROn@GXG^ETCTE\\ARA\\?L@\\@ZD\\DZF^FV?@HZJXLZTj@Xl@Zt@Vn@HPHPRb@Rd@LXp@~A`@`AZp@Zr@^|@^z@`@~@Zt@Vj@Tf@d@bAPZJPHPT\\NTX`@V`@JNJPNVJTFJHP@FHXHVH\\Fb@Db@@JBX@^?J?l@?FA^A@G~@Gj@En@?BCZ?PAJ?Z@TB\\@PDVFXHTPZRTRPZRt@VLDHBHD^JhBd@~Ab@h@Nb@L^Jp@RRD`@LfAZx@Vj@Nh@LLDHBNDf@NJBNFRLJFJHFF@@HJHHHJHLRXZd@RXPV@@FHR^h@dABFR`@Rb@P`@HRHPL^LZPd@L\\FLLX?BHNFJBDTVXTRLVLVLTLPLXTJLFFHHTXHNP`@JXJ`@Fd@BXBVFv@LxADj@BXHjALxAFx@Dd@?HDb@Dl@Bn@?BBj@@BDf@@FBLFT@FBHHRDJ@FRb@^|@Vn@Zr@Vd@P\\RZRZHLTZ^d@h@r@X^FHx@fAnBhChA~ALNRVDDJNHHJNZb@x@fAx@fATXPV`@h@LPf@n@DD`@f@JPBB@BLRNXTh@`@~@LZL\\Rn@L`@FRFVJ^Jf@H`@DRBNH\\@FHXHTPXJNLNJHZVXJLFd@DZDVDJ@fANf@D\\Dj@FbALf@D~AP^DhALxANz@Jn@Fz@Lp@DfBRf@B|@Fz@JHBJBHDFDNLd@`@HF~@v@VRbAp@r@f@hA|@ZV@@z@r@dD|DDBj@`@nA|Av@~@z@`A^d@PVT\\HNNXRd@Td@FLDLBD@BDHd@jAJVPj@Rp@BHVz@TbAT~@Lp@TxABNLp@ZxBZjBPpA@ZB^B\\@v@?d@C^?LE^Gj@CPCPCPELMh@Mj@ELI\\Mh@Ih@E`@CRC\\AP?H?VAN?F?|@?x@@tA?Z?ZAT?HCZC`@Gt@Ej@Gv@ALCRCXCREh@CV?NAH?HAF?F@L?R@J@H?@@J@J@J@JBJ@L?L?F?N?X?t@?l@?`@@F?F?B?D@D@HBTFf@f@fDDV@BDh@Dd@^hEJ`AFr@@LBJBNDN@HBDDNFHFHJFDBHDHDJB^J@@F@FBFBFBFBD@@@`@TJHHFFD@BBDBDDFBDBFBF@F@@@FBJBJ@FH`@FXHn@ZrB?F@J@F?J?NC~@AX?B?FAP?D?F@H?H@F@F@HBN@B?F@??DBDBHFTBHZv@FLVb@`@t@BFDFDFHHRRXT\\Zt@n@DDFFlAnALNTXLNNT\\d@\\b@DDDHFFP`@Rn@JT@BHTFRHVJf@Hr@@NJbBJlCB^?N@tD@lBAtA@tA@nO?rB@rF?p@B~H?X@b@Dh@DZJd@DNBJHX@DDPH^Ld@HVDPDNHZ@BH^Lh@@HFZFb@Ff@B^?X?X?F?V?N?N?`@?D?b@?D@^ANAVAV?FA\\?DCZCVCVEXAJEXCHCVG\\Eb@ADGd@Kx@Ih@ABKl@ETYzASbAERUdAAFId@UlAQx@Mt@e@zBOh@Mf@Yx@M`@ABEPGR?@CTCN?HAT@r@@t@?j@?JAJAPAJEVCNKVWr@w@jBO^a@~@IVITMb@Oh@Qj@Sl@?@Sp@Qh@[fA[`AIVM`@CFK^CJEPQp@I^Kb@G^Ib@G`@C`@AFAPAR?P?R@L?LB\\B`@@P@PDV?BBLF`@@DH`@J`@H\\H`@J^Hb@F`@D\\Fh@?DD`@FZ@JBHBF?@N\\BFLXFLDJJPRXV`@HNJPJRFJLX@BFPFRVz@ZjAPj@^lAPh@Ph@L^BF?@@FBHBF@F@HN`ADZFh@JhABR@^@ZDrADd@BZBX@J@BXrA?@BD@FL`@HTL^LTRRFH@@FFHFJDBBVJjDfAd@NfF`BdA^j@Pf@Nh@PND|Ah@jA\\xAf@hDhAbA\\^L@@f@NFDB@DBHHX\\?@Z^JNDDFDHDHBNDb@F"
                     },
                     "start_location" : {
                        "lat" : 42.5195439,
                        "lng" : 9.439953599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.3 km",
                        "value" : 8340
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 427
                     },
                     "end_location" : {
                        "lat" : 42.3957234,
                        "lng" : 9.191865600000002
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e4th\u003c/b\u003e exit and stay on \u003cb\u003eT20\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "aldbGccew@A@?@?@A@?@?@?@?@?@?@?@?@?@?@?@?@@@?@@@?@@@@@?@@??@@?@@@??@@?@?@?@@@A@?@?@?@A@??A@??A@??A@A@A?A@??A?A@A?A?A?A?A?A?A?A?A?A?A?A?A?AA??A?AAA?AA??AVYHGBCBARIZKhA_@l@STILEb@O^K`@Mb@O^Kz@YpBq@zBw@h@O^KPGZIZGVCTAN?L?L@VDZHNFRJRNXTBDTTPRZ`@VZRVRNHDJH\\P\\RZRXVZZFHTT\\d@X`@JNLPVZRX^h@X`@Xd@Tb@Zj@Vf@Th@Xt@DHTd@Th@@@Vn@Xn@Zt@Rd@\\r@Xr@Zt@Vj@Rb@DFR^@DT`@Xl@Zn@Xf@LRPXBFN\\\\l@R`@Xh@r@rAbAnB^r@LVXh@NVJLJLHHDD\\Vb@ZTJNJNFXHp@Ph@Dl@@l@Cd@G@Ab@If@SFELGVM|@e@b@YBAPKPKXOTOVOTMXO`@Ub@Uh@[`@U`@SXQXO\\SZQXO^UZQVQ`@SZS\\UNKXQj@]`@U`@Ub@WHEt@c@^W@?\\SNK`@Ul@]`@Wb@Un@_@p@_@d@YTMPMLGb@Yd@Yl@_@n@_@d@Yp@a@t@c@j@]z@g@d@Yf@Yj@]f@Yt@e@j@[`@Wh@Yd@[ZQTOZOVQLG^Sb@W^Sb@Yd@WVMJEHCVEXAh@Ar@Al@Cd@?b@?f@?p@C|@Cn@Al@AXAN?\\AD?`@AL?J@LBNBXJNFLFXT@@ZZZ^VZ^j@PRb@f@d@l@\\`@\\`@d@l@JLXZ\\b@VZX\\\\b@PTRV^d@Z\\JLTZp@t@x@z@ZZ^Vl@^jAn@`@TfB~@RLDBTLTJVP`@RRJB@TLZPb@R`@Td@Xf@VXN^Tf@X`@RnDjBzAx@x@b@ZRpAp@p@\\`Aj@l@\\`@TVNVLTJNDF@NDXFVDpALhBPdALD?H@P@|@Jt@JlALN@h@Fn@FN@NBB?N@tBRhALvALpDd@TBLBRDhAPr@L|@N|AVvBZtATlC`@bANVDz@Ll@HJBVDh@HZD\\DlARhARRBXDH@`@Hb@Fd@H\\DTDNB^HB@H?TBV?T@B?VAJ?RAXEXC?ARE`@MVK\\OPKZSb@W^UDCNIJEHEVKPGNENEPCZEFAh@C\\AF?p@DB?REn@Jp@LFB`@HB@`AT@?`@HdATTDbCf@NBPDB?NBF@FBjATh@JzAXjAVb@H\\FPDx@PZHTDl@RJDRJx@`@NHLLLP@@ZXB@XX@@XZVV`@f@XZ"
                     },
                     "start_location" : {
                        "lat" : 42.4622514,
                        "lng" : 9.2064202
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.9 km",
                        "value" : 5861
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 424
                     },
                     "end_location" : {
                        "lat" : 42.38305940000001,
                        "lng" : 9.139848499999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eD84\u003c/b\u003e (signs for \u003cb\u003eFrancardo\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eFrancardu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCalacuccia\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eScala di Sta Regina\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCol de Vergio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBocca di Verghju\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCastirla\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "glwaGehbw@EHEHCJENAJAD?BAD?B@HBTn@dCh@bBVv@`@nAl@hBX~@HRJ^Ph@Nj@@BNf@Rn@\\lA@@XdARn@`@xARj@HPPXFFZRVLXNXJXLVNTLRTJPLZPd@Nb@N\\V^PPDDX^FJDNFNFTDXLv@Lr@Hf@J`@J`@Rd@N^Tj@Ll@?@Jl@@ND\\Fh@Fr@Dp@?HBd@@P?\\?n@?zA?`BAXC^E\\Qv@Q~@ABKp@Cb@A^@RBf@Fx@F~@Bn@@f@Cl@Gt@IrAI|@Gd@O`@Sh@MV_@t@q@nAc@v@m@fAo@pAk@`A]r@IPCHEPK`@I`@C\\AJ?FAN@J@J@J?JAHCPABCPEVABIZEh@Ab@Hf@Jf@L\\PXFT@BHZPp@FXDPD^D`@BZBFDLLV@@LVRZZd@PZNVFJLTRRRTRNB@JFVDVAXCXAV@@@LDPFb@LD@|@XVBN?RCPCt@Sf@OBAJCVKLMPMZYj@a@PIHERMROVSZSZO^Kd@G`@EHA^EZCh@E`@C^ARBPDf@FZDPDj@H\\Fh@RTRZVVRXTTXPZHTHb@DTBT?t@AVAXAB?P?JBL?BBJDFP\\P\\PZT\\l@|@^f@DHT\\T\\R^FNBHL\\?@Tt@J`@Lj@FRJ`@Pp@H^Hb@B`@?R?J?b@AZG^G`@CLADCLCLGTAHIh@C\\AR?N@L@NFRRj@Pf@Lf@Ph@DTDJJb@@RBVA\\CXALAFETM|@EPGd@AFG\\CPEVEXCNAR@P@RBNDVDTFZBPBJHZ@BLVVd@Rb@NVL\\HTFTBDHh@Db@Bd@BP@L@RBPBNDRJRLRRXDFFHJNLPRZJNHL@@RXDDFDLJTLRFPFRDTHHFD@FFFHDFDHDJFh@Dr@Dv@B`@B`A?RCRARGZETERGn@AJENEREd@?D?V?X?J@b@?F@f@?FB\\BHBJHNDJBBHNFN?@FX@RBR@\\?V?l@AT?BCNIZ?@GLILEDKHSNgAv@u@b@_@TIDQPA@S`@ABWd@EHWlAUdAA`@Ab@B\\?XGf@Gl@A?WvAABg@lBERMl@Oj@?DKTYd@OTMTILMTEHSTmAvA"
                     },
                     "start_location" : {
                        "lat" : 42.3957234,
                        "lng" : 9.191865600000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 206
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 42.3838156,
                        "lng" : 9.1377322
                     },
                     "html_instructions" : "Merge onto \u003cb\u003ePonte Castirla\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD18\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "c}taGacxv@CDSTGFCBEBEHEJEJERCNEVAR?R?P@L@@@LBX?F?@AFCJCHEFGNOTGJQd@CJGJEJ"
                     },
                     "start_location" : {
                        "lat" : 42.38305940000001,
                        "lng" : 9.139848499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "49.1 km",
                        "value" : 49051
                     },
                     "duration" : {
                        "text" : "1 hour 12 mins",
                        "value" : 4347
                     },
                     "end_location" : {
                        "lat" : 42.2534801,
                        "lng" : 8.8201325
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePonte Castirla\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD84\u003c/b\u003e (signs for \u003cb\u003eCalacuccia\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow D84\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{auaGyuwv@DJDJRP\\^VTlAhAfAz@BBVNl@h@TZl@x@HL\\h@Rh@TtADb@?j@Bn@Hr@^dBT~@TpBDn@?n@A\\?PA\\?B?b@@^AXARGVEPIPENEJEN?L?P@LBX\\nB@HBT@TA`@?R?PFj@Jl@Hj@VnAJXDJFLZd@|@lAT^R^FPLVHJRVTNPNBB\\XNRDFFJVZv@v@f@\\JJBBB@BF@FBH?JAPCPCT?T@TDVJd@RnA?L?LCLCLKVMTMTKTEXAJ@J@JBJJVPPFDH@LFRFXFPJNNFHJLFRFZFZDJDNFLNNPJNHRJPJJLJNHVFTHNFJLJHDBBVLNDVB\\AD?ZAVAR@TJRPNPNTDFLPHPLXH^BVDZDX?V?VARC^?F?NBVDXFVNTJTDRBR?BATG`@Mb@KZCTANFTBLHJNLRHXLLJJNJRFXBX?VDTDPRHPFRINIHAH?H?HDPJFFFHDDNLHDHBJ@HAVH\\LZT^LH@H@H?H@J?FDHDFF`@x@NRNPXVRXJZFR@H?FAPEPKXA?Yf@WXOPEHEHANCJA\\Ch@CJAJCLEHGJGHCBKLKRA?EJCJAL?L?X?T?F?FCDADCDABEDKFK@M?G?E@EBABCBCBADAJAJALBZDl@Dp@Bp@Hp@@BHXJXLXBLBJ?L?JCXGR?@ENCT?T@^@\\ARCRCl@Bj@@LFXBFFHJFLBNBBAN?TBNDNLRZHVHXFX@R?F?\\?\\AN?LAJCJCJCJEHELEJCLAN?N?PB^?p@APA\\ALCTIRKLIFODa@DI@I@IFGFCDCJG`@Mj@Qj@QXGPIPKTGNG^I\\M`@K`@Ij@?@Ep@AL@b@@J@XDh@@Z?FCXALAHKf@Ad@An@Bf@@f@AZCTGXSj@Sr@[|@Ut@Wn@Ur@Sl@Ut@Sx@Sp@M\\KNSRUVSf@W`ACXAZE\\ETKd@Ab@@^BZFZHb@DRPv@BLFZFZB\\?VE\\?@ShAAPC\\G`AAp@AZAJADIZMVMTMHMLMHODE@MBQDMJQJORSNSLWPKNQ\\Qj@E\\B`@D^DR@T?^FRH^P^Vb@Vb@@@V`@@@VVTNPJXHNJJPJTFVBZARAHE`@Ib@CJAJCZAh@@z@?@Av@C|@?p@?r@@`@Fh@L|@Lp@DRFXR^HHNJLLPNRXNT?@NZH^DX@LD^?@@n@?n@Cn@?@Bh@?DDd@Fn@Jr@Nz@Df@L`@TZPNVHPD\\BR?T?LAJAT?@?T@L?J?ZCV?R?V?F@\\B^H@?ZPTRFLVd@N\\BFHRHTDJD`@@@Bb@@FFh@@DJl@Pj@V`@Vb@DHRVJNh@j@p@x@DDZ\\BBVT@@Z\\HFRTZ\\?@b@n@T^LX?@Nf@@BR^PTPPDJFRBZ@J@RAPCRIRINEDS\\?@Q`@I`@Fh@Jf@Hd@@FBd@BHBJJVBBTZBBX`@?@V`@@?Vb@Tb@Ph@BDN~@@VB\\@NBXBTBTBX@ZP^PXDHPVFHX`@FJNV`@r@JJLFJBR@^DXDZ??@VF\\Nj@FZDNBZFDBNDNNBDTZ@@NPHHPNJJPP^^FBPLLFJDXJP@XFR?LDVFPBPBN@R?B?X@LBNDHDJFXNTJD@NBLBD?H@LBLDNFPJPHHDNFPHFBXLB@ZJ@@NFNH@?HFJLDDLPXh@LRJTHJNRJNLZPXNRLTNPHHDDLJHDFBLHFFHRH\\F`@?RATCVAX?XF`@@PFZ@JHf@DXF\\DLHHBBJFLJ?@HNHTLfADTFTFLLPLNBBFNDTBXHl@Ff@F`@@JB\\@`@Bl@Bn@B\\Hp@Ff@HZLRP\\Rd@FTFPFXHPDHR@PBP@LBLFLHDDBBJPFLBDDXDJFPHT@?NRJTJRFRLTLRLHLFR@ZHb@N`@Rh@NTDZFPFJDPJLBL?RCRGRAP?PFPHXNRN?@TXV`@R\\PTNNHHJBNFJHFJDLBP@\\AZBj@H`@Rj@N\\NXJ\\DTNTBDNTPXTTTNRBTCNEPAB?F@JDLHTRBBb@f@`@l@Zl@BBHBBDDFDF@D@BBN@L@J?D@`@@\\D^Dh@FVFN@@DJLNDBRPJFNHRRJJFHHNPRNJNDPHTRV`@PRJFJDF?HANGPGJGLIJAFFPFVDXDJ@N@PAPAPAZER?\\?^F`@NDBXLLJJJPRPXRRLRRNRFZ@f@Dx@Nh@Jf@Lh@Jv@J|@B`@BD?`@?N@\\NB@NL`@b@Z\\Pb@D^B`@@j@Ab@@^F\\@BLZBHBFBT@ZBVDXJX@@N\\R^NPPJFBPHNDLDPH@@HDDDLLFVH`@Dt@@j@A|CCbBA`AAlACz@G^I\\KVQXa@^g@f@YZ]f@Mb@C^C|@@b@Hn@Lv@BDXrATbAV|@Ln@Jf@?L@PDj@?BB^Fp@JpAD~@?\\E\\?@IZWj@]f@[XA@QLYPWLYTA@QJMDGB[BYBI?WBSDSRUTWPQFE@WBE?OC]OSEA?O@IHEHEPCXAT?X?FFTFJJLPJ\\F\\@\\?VE^SXSDCREFCHE^ERDFAb@ABA^DB@`@APCLETOFILO^_@TOPGR@^Hh@X\\XT\\Td@LTLX^p@Vj@P`@HRJ^D\\Jd@Pl@Rr@L`@BFJRTVTJD@f@Ph@V^Nd@Jr@Lf@HZDRFNLNRVd@R^BHZf@Zh@\\j@\\`@VVTRTJ^LB@b@Nd@TTLLNJNDHPTV`@BBLRLHHFXTVRZ`@TP^NZDRFZT^`@V^Xh@Vb@RZLd@Nl@Jn@Pr@F`@HTLRPRPRLLJRHRDXBh@Dh@Fl@Pp@Pl@Xx@\\x@\\z@h@nA@BFNVh@JTBN@JANETId@GPABYb@KPo@dAq@pAc@p@KNSHG@SFWDYFc@Fy@JYD[DMBUDK?c@@m@Mg@Ia@G[@ODKLMPETGZA^Db@DNJh@XpANv@FXDRLn@Lr@Bd@LtADbBF~B@nA@~@?D@F@@BDFJFDFB@?JFTFTJPHNJNTHRHb@Br@?@B|@@`@D|@BbA@^HZVz@h@vA^hAX`AJd@DPRx@VpARf@d@jAZv@Rf@Td@Zv@Nj@DXBf@Fj@@j@?t@Bh@@TH~@LxAFn@Bj@A^ETCZCd@Ab@@~A@^BPNf@NNNPZL\\D^FXLTNTZVl@`@dAXp@Xd@Vf@V\\X`@DF`@p@HLt@nAp@tA\\p@`@v@@@Xd@Z`@\\^j@x@@Bl@dAb@v@Tb@N\\`@dBTjA?@BPNz@JbABh@@FDn@@`@C\\Kf@ADOf@[jAa@xAUv@U|@Yx@]|@GXAR?P@N@HNZBD`@n@T\\PVJ\\P|@DRJr@@R?JCd@G`@Ov@?`@Bh@Fj@?@ThADNPn@VrANt@Jn@Dd@F|@LnBJnBJjBDp@Bb@H`@?DJf@Nh@L^FHFHPLLDHAFAt@]r@[RGN?JBJHFD^Xd@\\B@TND@NDd@FNB\\DlAP`@FRBf@LPHh@`@XV\\XNNJNDJVf@Rh@\\bALZDR@RAf@C^Ab@?L?JAV@HBL@HDHBDHDNDT@^C^EV?TDRHVTRZ\\l@LTd@fAFNx@~AXh@HLhAvBn@pAn@nA@BDHd@~@FNh@bAP\\NXJRNXFHV`@?@\\Zj@d@b@d@BBR^DFL^FTDPJ^Jd@FPFPP`@NRZRFB\\LZFP?TAVAj@Iz@I`@CT@VLHDRPXb@N^HZD`@Db@@RDPBFFH@@D@RHd@@d@BZBPDDBNRN^Rl@`@dAHPBH@R?L?FGXAFM\\ITGTER?N?LBLDJLRXRLHTLHB^PTN\\^\\`@DDT\\BBJRFPBZFb@BTDVJj@H^Pb@DJBP@J?PCPALEZ?L?NDT@BJXFHNTZXZRZHf@Lv@L@@\\D@?PFFDFFDHBFDFBRFZ@J@d@Fx@@LD^BNJZ?DTb@Vf@`@j@n@v@TZPVDHRZXj@?@b@x@t@`BJPLNPLJDLDLHHJBF@BBD?H?LCf@Ef@ITKTS\\[d@Yb@GNAHCV?J?D?DBFBHLR^Vn@\\VNFH@BBFDRDXB^Dl@@DFXHVPTDDNFJ@N@X?RBRDLBJFJJFLZd@DFVb@LR^t@NXHHX`@NPXVHHBDBBHHDH@F@B@D@H?HAR?RA\\Cj@ABATCJAJMRGFEBKDUHIBWHA@QDI?KEWOAAQMMCAAC?CAE@E@KJUR[`@CDKTEPER?LBN@LBJRXj@p@n@j@BBFJZ^PTj@r@NXFd@XvAHn@Hv@Nd@@BN\\Rl@Tn@?@n@tBTp@Rb@@@\\`@V\\FFTP@?VJVFT@T?RITKBAJCTCHAn@It@GF?D@DBBBDRDR?J?HCJGPWf@KT?@AHAJ?LBJ?@H^Pd@BLDP@\\Gn@Gd@AFCf@?FBj@Fp@DLBTARCRGNGLQ^CLAJ?J?N?JBH@D@@VX@DHLJV@@Lb@@DHn@Hj@DXNz@Rj@@@TVDFXX`@`@NLRFRBF?L?\\CPBRDTN?@VVZR\\Rb@Rf@PB@VJH@b@FD?\\@V@J@J@NDDBFBXJJDF@L@B?FAHCJIBCNQFGHIPIBADAD?TBBFDFBTCNIZCPIZCFANAP@B?FBLHTHLNR?@V\\?BNTFLP`@BDPf@@BT^BD\\^VLF?Z?b@@RDLHHDRTHJPPNPr@fAJNJLFFFDH@H@NCZBFBDDLNDFJNNLDDPHHBXLF@XBH@P@N@b@BN@R@L@TDb@Hb@F`@TJLDDLPDHFN\\`AJ^@H?B?BAH?DCJGHKRCDEDC@GBIBGDEDA?CFGFKPGJGPCHCJCHAR@BBLBNBFBBDBLJHHLJn@d@|@t@\\TB?NHN?HAXAH?d@BRD@?LFNFBBNJLJFDJHLJFDL@H?B@LANEDCNIHGBAROFGFGTOPMJE@AJCHAHAB@DDFDDLDFBFL^HZDNDLHX?BJVDP@BJRFL?@JRJN?@JNJN@?FHFJFF@?HFJFHDB@L@J@D?H?PAFAF?N?H@@?B@B@B@B@FHHJ@FFPBP@H@LDX@DDZ?RAJAHAJEf@AFEb@?J?n@?\\APERKTEJIPCJCNADAF?F@F?F@DDT@HFRHTBHN\\@@Pb@?@Ph@BF`@hAPd@N^DJBFLJJHZHDBVJHFLHNNLJJRHHZ^Zb@V\\P^HPDVD^?BFRFRLNHFLDNBBAPAXGVI@?RGLELERE@?NAN?NBPFB@LJLPFJ@D@D?DAJIXEHKLA?WXCBSTGFIFQHE@MDQBUBOBC?GBE@EFCBADAB?DAD@LBNJVP\\Xv@LXJRJPJN@BBDFFLFBBLHPHD@PHTFTJ@@NFLD@@HDHJHLDLBT@D@LBLFN@?NRVTPTNLHJDDJLFJ@BFPFRJXLb@Rf@HVDPHV@HH^H`@Ff@Ff@D\\@@Df@D\\FPHRLPPJNHFB\\LZN^LVJJDRHLHLFNPDDRT@@N\\BHJ\\BLDPDNDDFJJLHHPPHLFLFRDTFRHP@DHJLPB@PNVRHFLJVRXV\\XDBTTLJHLHHHHPRLPLRHNBJBF?@?J?J@J?J?LA\\@Z@N@D?@DHHPDHFJNX@BT`@LRHLBDLNBBNRLRDDR^DLBHBP?BB\\?L@X@LBTD^@BD^DZBLF^BLDNLVFJFDDBHDF@@?L@J?FCFANCF?R?H@FFB@BDDFDTDZBZBNBPFNDHFFHHHHDFLTJXD^D`@@P@d@?f@AJAZARAFGZCFI\\M\\Q^EP?F?H?PBT@R?Z@F@JJV@BTd@RXDJBFDFFL@H?B@DAFGh@C`@?F?NDJBFJPLNFFTPB@HFn@d@JHTHTDV@P?TALBBBFFBHPv@FVL^FXF\\@DDTDV?@@X?R?H?F?NC\\CZ?J?JBVDVDV@@@DBFJLDDBDFDH@HDHBDDLDNFRH@@PJLHFJHNDJFRHLJLLJLDNFH@@@FDBDDHBN?DAFAHET?@CFCDIHGBK@O?E?OASCCAOGQMMMGKCGOUCEGIKIIEAAOEOCG?Q?C?UDSFC@QHGFA@GFOV?@IXEPCFGXAHALETCHELEZE\\CR?BAV?JAF?B?b@?j@?L?\\AP?V?XAN?^?J?`@?@G^EJADIJKLABA@KJOJA@OFMHA@_@HA?a@J]JC@WHIBWHKBMDSFIDQHCBEBGDEFGJININCDEHKRCFINKNA@MNMNEHOJMDOBK?AAKAEEEEEGCGESAO?QCS?O?_@AK?QAWAECUCOAGAQIYKSM[EMIOQ_@CGKSKQSg@O[CKEIES?[@Y?IBYBS@QAG?CACAECCEEOMGEOKKECCECEGCGKc@GYACQe@AGK[CEQ]CGAGCQAU?W@WAQ?GCIEGIIGEMEC?KCGAGCAASIKG[UCC][EGUWACS]AAYa@OUIKOSGMMQMMMOIQQa@AESm@Sc@KYGOSg@AEYm@K[AAIQGIECAAKEGAKAE?C@GBIHADABABAPAR?LANAL?BCNCLEHCDGFEDE@G@AAI?KEKCMESKGAUOAA[OCE[_@UUg@m@YYQO]SMEA?CAE@I@GBCBA?CBGDCDGJABABAD?FAJ@P?@@ZBPHZDNJ^BJHl@Fz@Ab@?JCb@?BCNCHCDCBKHQHC?QFYHUHA?[JWLOFEBYNONOLQVEFMLOLCBQFE@EAKEKKCGIKKYACS_@Om@CKGa@Km@Ia@G_@IWAEQa@Sc@Sa@Wm@ISO]Sc@Qg@Qa@Mc@M_@Ma@IUACIOQUOOOMOIIEECMIKEYKGCMCUGO@K@EBC@KBQHE@URABU\\CDENIVA@IXETCd@ADCb@AHEn@?JIb@M|@G\\I\\CLKf@Kl@?DIn@ADQtACVETETIRA@Ub@A?Y\\?@MPIPEJI^CLG^Gb@AHGn@AHCd@AR?Z?J@b@@D@VHj@DRHl@Jl@Jl@n@vDDTBVHd@@FLr@Nt@H\\@BHh@Bb@HbAFb@Jh@?DXpAHj@Fx@?HBd@@N@`@@X@T@ZFr@BLJl@@HFVZn@@BTb@LRDNBTDp@@VBVBXLd@Jb@Nn@@FJd@B^?VANELELKRKZI`@Gj@?DCn@AZEbA?HAf@?FE^ADEPELEFMPMLKJMRA@GJAHCHE^GVKd@ADI`@Qt@Op@Od@CHK^A?GJKHOFKBMAA?MEMIKGIKKI?AGM[o@EOOk@M_@Qm@GOCGCEKIK@G@KHGJIJKRKZG\\AXAH?P@RHbA@f@@f@ALGb@Oj@K\\M\\GZCHAPAJ@`@@LDz@FbBBl@?LANADAJCLEFEDC@EBGBU@UBMBC@EDEJEPIb@CLENCDCFEDE@[?]Ei@EmAKU?u@CeAC]AWGOKSQIMEEEAEAE?C?C@EBEFCBABCH?D?F@JBD@B@B@@PJB?L@RDl@Fr@Hd@Hf@Jd@HFB\\Ff@Jb@PTLHDj@d@NL@@B@B@B?BA@ABA?AFGHKDMRg@N]R]NOHEFCVETA@?\\@T@T?FCBCFCFGBE@CBG@I@WDo@@SBO@K@G@EDEDEFCLAR?TBRF^LRDH@L?DAPGVKTKTKJCT?@?JBVLRNRJD@B@F?BADADEHMT_@JSJMJKNGLE@AHCBEDKBE?C?E?KEQCIAEGQCSAAAQ@WBMJUBIRg@HSHc@DU@ID[BSFm@@KBc@@QFe@Lc@J[DKTg@j@uAP_@BEHOLINK^QFGFKFMBIBM@ADu@@c@?C@c@?KBm@Fy@Hs@ToAPg@BGNUDEJKRKDCHGFEBE@EBG?M?I?I?CAKEIe@iBY{AIe@AEMiACSAOC_@IwA?mA?[?EBc@Lk@Re@FIDGDCDCHAFALAJDRJNJTLRLHDRDH?@?J?JEZM`@SLILCLCF@B?HBFDFF@@NZBHDPDZHl@Hn@LhAHf@F`AB^?V?BAn@At@Cv@ChAEzAAZCn@ATAh@CbACRGhAETANEHCFEDEFOHIBI?}@Om@KG?IBKFEFKPI\\ARAHEdCA`ACr@EXEROf@KVGNSd@Ql@Mh@?BAFAJ?Z?NB^?DDv@A`@AX?P?F@FBLDRNVFJb@p@HJDNJZHdA@`@@`@ALA\\YpAIVITIPMVORQNEBKHKFEDIHQVMTIJY^A?W\\]`@QRY`@GJ?@GLCRAFCLAN?TDx@Hn@B^BX@P?B?PAPCLGJKPC@MNIPK\\GXCJAL?HAZ@T@\\Dx@Bt@?F@LALALKZGJKTQ^]r@Wn@IVCTAN?P@X@BDVFR@DL\\BBFJPP@?ZV@@XN`@TTJPBNBR@@?VBNBNJNJRPl@h@RHt@^x@RJBJ?TCXIZWp@}@P_@j@iAZk@VYPMHEBADCHAh@Cd@Af@B\\HJDPHb@NLFZLn@Vb@Nd@PHBFB@?J@F?F?HAFCFCJGVQf@_@^Ux@e@XOLIBATOTQJKJKHKFMHMFQ@ADMDMBM?ABMDa@BWBM@E@EDKDIBG@CDEDGDGFEFGNIPININGFEDEDGBCBCDGDGFM@ABELYJUBGLWJW@EFUH[BW@Q@G@GFUBEBIFGBCDCDAJAPBB@JBFDH@LDP@F?FANEHEHAPIJEJ?LB@?JFLLBFBBDVF\\FVHn@Bh@H^Jh@F\\?DJd@Jj@?BJ^N`@FLFLR\\RXRRXRPL@@THXNTLXPJJFLBF@DBR@NCPKZIREJAHG^Ed@Af@?d@Dd@@JHVN^DHHTN^P`@N^FHDJHPLRNTDFBH@F@D@B@TAX@DA^?Z@RBPHVLXJP@BNNJFJJJFHDVNXJXF\\DP?P@XD@@ZRBBLJ\\XJLZPFDZRB?LBR?ZKFCJERQPURSJIDEBAFAFAHAD?D?J@JBVLLFDBFFFBPNHFHDPNRPRPTRVTPRHJ@@DHBN@NAVAXGd@A`@?L@NBTDVFNJNLLJHDDJJLPBF@F@J?DA@?DCRGPCHA@IVADADAJAJAL?L@LDVFRHXLd@FP@FJ\\H^@FJTNh@HTNb@F\\BN?B?B?BADELGLADGTCN?D?T?FBH?@HLLLBBJJNPRRFFLJNNDDB@RLVJJFJF@BNJLTHLDHLTBDFL?@DV@@BZ@R@H@\\FT@F@BBBFDF@LBLC@?VGFA@?N?L@NFBBFFDHDNDJBLBLFPDHLJPHB@NNFJBDBH@J?B@J?B?JAFADCHCBABKJMJKFIHGFCBILGFOXKRKXCNAHAT@N?H?VALAJCPENCJOZA@Wb@U`@GJU^SZABOXS`@S^Q^MVEHM\\ADIZGb@Kb@CZ?@?XAT?J@ZDVDRFT@BDX?B@R@R?X?\\?^@N?HBZBb@BT?B?J?\\A@C^CNERGVADI\\EVAT?H?P?^?DBd@?BFd@@FBTD`@Jb@?BLh@DTFTF`@BJ@LL`@Hh@H^BLJl@Fb@@HBJ@X?H?TAd@Ab@?JAd@AF?f@?PAZ?@Cd@?H?L?Z?DB^@b@B\\@D?BFb@?@Hj@Jf@?DHf@@DF\\BNDTFb@D`@Bh@B^@VB\\?d@?^Bf@?BBX?V?HAVATCPCNABEFKNGFKHSFA?WBOBC?KBMFE@QJGDMFQL[PKFUJSDM@C?OCMCA?EAO@KBA@IDIHEHADCJAD?NBTBZFl@@FD`@@DB^BZBXHTFJJFNH`@RHDTL`@RRJJF`@PDBFHLNFJLXJVHRN\\LPPLRNHF@@JHFJDH@DNb@DNLVHPLNDDj@x@BBBDDFFHJJHDRBTEPIROFGJIRM\\WLINQV]@CPi@?AJi@@YFUH[HMFIROLIRE\\KDALCRE@?`@CJAh@Af@KZCRGLCRENEt@EZ?H?TAL?L?TCHCVGXGVKPKFCXOFERULONSPc@@GJc@BKBKDUFa@BIBGHMFIBABADANEF@F@D@NFBBD@DFFLBH@J?^?D@TA`@@BBb@@JDb@@JD`@D\\@PHl@@JDX@FFb@@JBJ?LBJBDBDRHb@NF@VHDD@@@@?@@@?B?FARAFCHM\\INMVABCLCN?H?@BJBVBHBPFT?BDX@T@J?X@H@NBJDP@@J^DD@BJLFHBD?B@D@D@DANAFCNG\\Kl@ADAFCPCLADAX?N@PBPFRL^@BBHFNBJJ^FRFn@@PFt@B\\@JBTFj@?N?@AHALIR?@Ub@ABEHAFAL?F?F@LFTJRHR@DBT@R?LAPCNCRGXAJI^ADMd@IVGPCFO`@EJKZABELGLGDABKDMDI@Y?A?YAGAE?KCMCC?GCKAM?K@IDKFA?IHGHGHY`@EHSV[^WZA@SRIF]ZEDSTA@GJGJEL?@CLE\\?BCb@AFAFENGLABQVGHW\\A@SVGFOLMLQPGJ?@ELEJCN?@Gd@?FAZ?N?BD`@BLBRFXD\\@N@PB\\BTBT@BFTHPBFPX@BLZDH@DJZ@HDXBT@L@`@F^@LDh@@D@^?N?FAZAPE\\AJCP?N?LD`@JZ?@FLNVPZDFTZPVJLLLFFHFHDTDVLHFPNBBHLXf@FJHLLT@BVb@FHFHHFFBF@L?JAHCHEJGHGHIHKHIFGHIHGHCHAH@B@D@FDHJDFLTFLDDLJFBHBL@XBJ?J@@?JBJBFD@?DBJFRHTLTNFBFBF@F?H?HEDIDIDKHYFOHIDEDCLEVANARAR?\\?@@@?D@DBDBHFHJFJHL?@BF?F?J?H?DKhAGn@?FAN@H@FBHDJRX@Bx@lANTJPLJTTl@`@v@d@@@^TPLHHDFHL@DFNFZFVDR@DFRJRDHHHPHTH@?NB~ARVD@?T?JAD?XKVMn@a@j@[REPCl@ED?P?L@LBF@LD@@NFLH@@FHLNFJJLFPDHFNFJDJLNJHHDH@F?FADAREVGHAH?LAJBLDRN"
                     },
                     "start_location" : {
                        "lat" : 42.3838156,
                        "lng" : 9.1377322
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "17.6 km",
                        "value" : 17632
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1367
                     },
                     "end_location" : {
                        "lat" : 42.163996,
                        "lng" : 8.787516199999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eD70\u003c/b\u003e (signs for \u003cb\u003eAjaccio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAiacciu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCristinacce\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVico\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVicu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSagone\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSaone\u003c/b\u003e)",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "gs{`Gytyt@B@DBFFb@v@JPBFJRJRHJFHHHHDLFH@LBVBJ@TDJDB?HFHJHHHLHPFHHPDFDFJLPNJL\\VLPFNDLN\\DL@DJRLLLNPPNNHNJRRZFLPLFDD@B?H@DAJCBCBAXW@A`@YVOVIFCD?NAN?TBXBF?XDF?@?N?LCB?FAHGLMFIHIRSXUPILI`@Ub@W^UXM\\Kf@ORGNERENEPCZELCNCJELGFIDK@ABMBO@K?C?O?QAICSE[Q}AGe@O_BOoAEY?AESIYEQOg@K_@M_@Sg@IWIS?CGMCQEYAS?]A[@]@uA@QDi@Bg@@YDSDS@CDIJOHMDENQPSJQHOZs@LYLSJOHKRQPMVUTYJWFW@OAQCSKa@A?CM?G?K?E@I@GBGBGBEJMHIJGlA]RIHGDEBEDIBG?ABQFe@Dc@BODKFQJUHQHSFMBOBQBSBY@I@S@GBGFSP[P]FQHY@GJm@Ny@Ny@FWFSHO@CLSFKJMVYRSd@c@NULQFQFQBQDSHg@?ALi@H]DMDOFSDM@M@E?G?WC[CKEKCGGOGSAEAGAIAQAK?A?Q?MBQD]DY@U?c@?Y?_@Ak@?]CSCUGa@Me@Kc@GU?CGUEQIYMa@Ga@E[AICe@AKA_@Aq@?O?K@GBYFUDGBELIJCD?D@JLHNNb@LZHNHHLFJFTFPFD@FBDBJBNFJFB@NJJFFDTR@?NLHBFBD?BAFEJGBANKJILILINGNGD?JCHCRGNGPMZOVKRINKLMNUNULQTWPOFIFGDIFIHMn@kANYJULUJUFU@UAOAUAGAUCYAYCUCa@Cg@C[A]@[?CBWBe@@U@MAKAKAICICEKKIEMEMEMGMIQOMOOQKQMQOQKMIKKOGMACAIAK?S?[@_@BYDWFSFOJQFILGVWPQHEFI@AROFGDCLGLE@?NAR?B?P?^BXDD@PHB@RLLHB@TTLT@BJHNNNLLHHDPH^Pd@PLDNDH@D@DADADEBCBC@G@A?C@C?CAEAEKOIGIEOGOCSEUKMEIGKKCGAEAKCMAQAYC[A]?YCY@_@Ac@@UBS@I@KBGBGBIFINSRQXSTOFGDG@ARIJEFAH?F?DBBBDHBFHVJX?@L^N`@LXJTTPFBB@L@LAB?JALIFCFGHEDINONSLQJMDGPUNYDIDM@O@W?C@e@@]@U?ADYH_@H_@?A@MBO?O?QCKEWEYAY?E@G@E@CBA@CFCFA@?D?B@BB@@?@DDBJBJ@NBX@d@@J@T@\\@XDb@D`@F`@DT@LJb@jApCFDBDFD@@B?D?FABADE@CBG@E?C?C?C?AAECIKQQQIGCIIQG[COAY@o@?o@?EF}@BM@_@Fi@Da@@SDYD[Be@F]HULOXORULQL[Hg@@y@@]AY?AA_@?M?G?YBWDYFUDQL[FU@EBU@I@M?C?[@g@?Y?E?i@?AAa@AKASC[?CAQ?Q?I@E?EFUDW?ADQ?M?C?MCOEOGOKUIUIQGQIUKOGKECEEIEIEIEKEGGIICEEIGSAEI[CIEQ?CCQG]CYGYC[ACAQ@K?E@EBIDEDAJAD@D@DBFHDR@L?^AZA`@?HBJBJBFJNHH@@LFL@L@\\?RAH@@?@?JFJHBFBD@BJ^J^H\\JZHRHNBBLTPPBDFHJRFTDZ?H@HDR@@BPBH@BHVBNDNBBLd@HRBJLb@L`@FRDV?H?@?FATCNAJEVABK`@I\\CNEPE`@CX?\\?@?FB\\Df@Bh@F\\Fb@@BDXDRBND`@B\\@^?b@?PAR?DAR?Z@TBX@BF\\BHDRHV?BJXDJJTJTJTFFFFLDJBHBJDL@VDRDXHVFH@PBH?N?XAXCJ?RAFAT?V@XBLHLJFHBBDLDL@FBH@Z?H@T?TBZDXD`@@J@N?P@L?@ATET?@K\\CJGNKV?@IPITABIVETCV?N?JAZ?FAVAB@R?JA^?DAZ?RAH?VBL@FDPDRHRHP@DLTDHBDHRDLDRDXBRBVBXBRDVFR@BBHHLJNNNHHDDNJHDDBNFTDTF@@L@NBPBRFND@@JFDBHHJLDDDFJNJRFNFTBVBXBVBZD\\B\\@T@^B\\BTBRDRDNHPFLHPLPDDPTt@dAJJl@|@FHPV?@DNBL?PCJCL?BEHCJINEJKTEHCLCJAL?L@N?PFpBBb@?JBVBPBRBRBRDd@@B@T?RAf@Eb@AP?B?L?N?LBV@BDHFHDFLHLDRHFDNFHFDDNLFJFLDNFXBTBPFn@Hp@J`A@PDNDPDN?@DNHNBDFHJNLL\\b@PRFHJLFD@BJFNJ@?FDHBHBB?b@FL?TBB?^B^BB?XDH@B@JHHJBBDHLVFLDLFNFJTb@NTPTFL?@FRBR@R@RBZDXF^BPBHJz@BNBHBJFJHJFDHDXHJDLFVRLLrA~A`BnB`BnBTXNRJJZ`@nAzAZ\\LLd@f@^\\^\\PLLHHBFBLBB?H@LBLDJFHHHHHHPTHHFFDBB@HBJ@T@LAF?@?JAJ@J@HDHDHF@?FHHJHJDHJRN\\FNHLHJDFDBJHJBDBB?PBN@L?L?JCJENCRCJ?J?J@HDJDHFDBDDR`@HPLTFHDBFDFBF@D?L@HALCFAJCHCJCJCPAT?P@VBVFD@L@J@LCLAJE@?JIXQTQZQh@]XOPIZKDAJEL?H?D@JBHFJJNX\\v@^~@JRJRJNRXZ\\FHRVDFJNNN@?JDFBDAB?HCJERQ@?NODCFE@ANGNGJ?XA`@AP@T?X@J?J@H@NDJFNLd@d@DDVVRTRTNRNTP\\FHBFDFFDBBJLLDNDN@NAPEFAJI@?LCJAL?J@JBLFVP`@^VXJLLP?@HJFFHFNFR@TCJCNIDEDG@CBEDOBQ?CBYBQ@CBKFIFEHEFCJ?H@H@P?F?F?JALELEHININIJGJENEPC@?N?P@FBF@D@`@Nh@RVJXHLBND\\J\\HXHTLLHPNXZRTLNRPJDDBNDJ?J@X?Z?TAJ@HDLHJNFDf@|@h@bADHJNLPFDFHPHPDRBRDFBHBVJB@^P\\NTLXLZNZLVJTJXFVDB?PBTAVGJITUNUDENSJIBANALBF@RD\\LJBZJZJVHVHd@N\\LRLLJJLLRHRJ`@Ln@Lp@Jl@@BHb@F^FRDVLh@Lj@Ld@Pn@?@Rj@Tj@Pf@Rn@Lj@Rn@Nd@Rl@Rh@Tj@P\\FJXb@V`@@B^l@JNNT^l@NPLRR^R^P^LVNj@P\\FHT^V\\@@T\\VZFJNR`@f@BD?@RXBDHJPTFJPRJLXb@\\f@HHLRTZNPZ^PNHFJBJ?PHND@?TBJ?F?XC@?JCPED?N?TBPDNJLJFDPVBDHPJX@DHXHVJV@BHLPRRRRLZLNFNHJHHNHZHb@DTBVNx@Lv@D`@D\\@RBLBJBJFJFH@BLLNJFDZLTDZHNF@?PLLLRVBDJPRTNTPXRVV\\TXPXRVPVRXV\\@BJPHPBVDX@TDT?@HTJRLRTPTPRJHFFDTR@@RPFFRPTT`@\\d@d@BBb@`@PRNP`@^FDNLXVPVLTDHFLLLDDHFLDF?L?T?J?\\?XEZM\\QHILKPMXM`@QDCZUBATMJAJEP?ZFf@JD@\\FD@`@F@@`@HB?^HB?T@H?H?TGb@S\\U@?^SFCXOJGTIZED?TAXCTGNCN?D@FBLLDJJTFPFRJRFLRXVTVXTTTTNJD@H@R?VE\\OXKTIJAL@NJLLJTFT@FDXFZFTJVJPNNRNNLJNFTDVFXHRHNLLLJRTNRP\\Xd@HLNXT`@HJLRJLDHJTBDFNFXF^J\\HR@DFHLRBBLNNJVJVFVDTHVLPHFB`@PVLDB\\N\\N`@NZHFBRDTBRDFBLBRJ@@TPDBPNTNRNPJPJXHZDLBJ@d@JTDLDTHNLHPJTHNDFNZ?@Td@?@Zd@VZXVVRVNPHLBL?RGJKFEJIPMRGVCXBVJTPPR@@TZRZP`@FNHRHTDHN^NZNRNP@@TLZN^L`@P@?ZR\\VB@XTDBRPXTLJJJVPVRXTDBNJRHH@H@JAFCRGPKDAPED?`@G"
                     },
                     "start_location" : {
                        "lat" : 42.2534801,
                        "lng" : 8.8201325
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.5 km",
                        "value" : 12537
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 896
                     },
                     "end_location" : {
                        "lat" : 42.1131355,
                        "lng" : 8.701763099999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eSaint-Antoine\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD70\u003c/b\u003e heading to \u003cb\u003eAjaccio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAiacciu\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSagone\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSaone\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow D70\u003c/div\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "_dj`G_ist@@@?@@?@??@@?@?@?@?@?B@BBD@FBNBRFVBH@LCNCDCHCL?LAL@JBHDDFDDBDHPBHDLLNRLHBNFXLNDPJDBNLLPFLDP@N?RATCXE^CXE^?NAJ?^?B?ZBP?@?FDTFPNVHRRXDHPX?@V`@X`@?@Zb@Zh@DJb@v@Tb@Zl@Tb@P\\HX@B@J@P@T?F?|@Ad@C`@GXAFEXAHAJ?J@X?F@LB^Hx@Df@@FDb@?@BVDVL`AFX@BFPFJFJNJHD?@LBJBF@D@H?TCTAJAH?JBJF@?FLBL@L?B?NCPGZGXGTKd@IZELIZ?@E\\CR?V@P@NDLDL@@HJLNB@HFNDTD@?VDHBFDHHFN@N?TCXEZEd@G\\CTAL?@?D?@?P@b@@f@@RA\\?@AFALETA?Oh@ADIZCHGPERANATAN@XBTDd@Dn@?PCd@?@C`@C\\Gl@IbAEZIRKJKDKBA?E?OGKGCCKGKEMCKBMDEBGDKHCDABGHGNEPCRAN?F?Z@L?@@VAf@AZG^CNGREVGRMj@IZ?@Kb@I`@CLKl@CHCP?FEZCp@AZ?DCRAJEx@El@E`@CLAFERGNELOVS\\CDCDEN?@EREREVAJG\\KZEJKJMHKHIHINADEJCXCZ?v@Aj@?B?r@?h@A^?NBJDh@D`@Hx@F\\BTFf@Lv@BZBd@A`@AP?N?XDNN\\DDN\\DH^v@Tf@JPJRDHZp@N^JVFV@LBJBd@D\\BTJZRb@LVR\\HJLFXHZHVHLHB@LJJHDD`@`@`@b@BDLPP\\PXVj@Pb@JPFDDBJ?LENOHSBQBS@K@c@Bk@Ba@?EBQBMHOFEBCJCJ?JDHFLVN`@FVBL@DFXBJJ\\?BHRFHNJTL\\L`@N@?\\HRBR?NCPI@AFETMLINEREJCFAFEJKVW@ARSPKNCB@F@D@F@HHJR?@DRBFDXBJH^BJJd@@DJ`@BHDRPj@Pj@Vt@@@@BFHJFJBN?NEBALIRSPSTWJKBCJI@?JGTELEJCVGB?RIRKLK@?LOJOBGBGBMFe@D[?C@KFa@@MB[Jg@BI@EHKHED?@?B?D@D@@@DFFNDZ@H?`@?F?D@Z?R?J?b@?DB\\D^DZFTJRJNLJBBTNPPHHDDDFFNBJ@B?D@L?LAJ?JENCHCHEHONCBC@IHODA@GB[FC@SJGDA?GHEDEDCFEJCHCF?NAB@RFR?@HPHL@B@@DFFHFJ@B@@DHDNDJ?@@T?XCTGTCDKTEHABMTGJOXGHINKRIVGVEZALCPA\\ALC`@A`@Aj@@TBXFb@Ff@FV@HNj@Ph@P`@BBJNHLHDHHNHLJLNNPHLNXFLHPPj@FTBHH`@DPFXH^Lp@DTDXD`@Fh@F^?DB\\BPFl@Fb@NrABVBNJ`@JXRf@JVLV`@x@HTDNDRBVBh@DhCBz@@hA@NF~B@Z@XATAPGTGFMJ}@Xc@JE@q@Vc@EQGKEQQUWEEWYECOIUGc@?WJE@WLIFCHERAZPf@FT@N?H?NGXQXSX_@f@KXGh@Bj@Ll@R`@Td@BHJ`AC`AC\\?BIh@A@GTK`@OXOXKPK\\CTAF@J@FHVJJLHBBTXBDBJLXLb@Ld@Pj@FTf@dDRpAHZBNFLDFJFN@F?@APGLGFCRCPCTNFHBFHZ?D@HARCPG`@CJg@pBEPMj@CNOv@CRCNE^Gt@AdA?bA?DA^?HCNCPCJCHEXEV?N?PDVDRDLJ\\^t@LRDFPPBD~@lANRV\\@BT\\R\\Xz@l@zA`@z@?@V`@BDV\\XTPJTBT@t@D^HTFLHD@RLDDTVNNFHv@|@JLFJf@h@FHTXr@x@FJNRXn@Rd@BFNd@Pl@@@Jh@VdAJ`@Lj@JZHZNj@Ph@f@lAp@bBp@|ANb@`@fAFLXbARr@Jf@Z`BXvALl@@FNl@L^?BLTHH@@PNRHPDF@j@JXD|@NNBh@D\\DF@ZDXDTDJBTJNHXPJJhCbBpA|@?@bAr@nAz@fAv@VRDD^VJHPJb@Zt@h@^VVTVPTN\\VNLp@b@v@j@dBjAXR\\T@@\\VB@ZX\\\\LLTh@Pd@Rh@HPLPNTHHFHNPTRJH\\VRNp@l@j@h@b@j@b@j@^^h@l@\\ZTNTHRJdAXzAb@b@R\\PVPPP\\\\^f@Zb@d@f@RVRRTL~@f@x@f@LHFDJFJFj@Zt@ZJBJBJBNBp@JpAJlALb@D@?`@Dz@HrAFr@Dl@Hp@NHBXJLF@?DBVLn@^RJn@^|@Zd@Jp@JVDVB\\HVDXFt@PPF@?p@P@@lAXz@Tr@P@?b@Bf@Dz@LH@PDVHf@PB@`@Tb@XLLPPFFJJTXT`@R`@L^P^HJFLJLDBFFLFNDJ@B?X?`@?b@?b@AP?n@A\\?n@Ah@?h@Ab@?p@?TAx@Ar@?N?X?f@A`@?j@Ej@Cd@GZGn@KXE^El@GZEb@Gd@G`@Gf@GTCJ?H?b@GJCH?@?F?XD"
                     },
                     "start_location" : {
                        "lat" : 42.163996,
                        "lng" : 8.787516199999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.5 km",
                        "value" : 5502
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 415
                     },
                     "end_location" : {
                        "lat" : 42.1138378,
                        "lng" : 8.6532564
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiniccio\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD81\u003c/b\u003e (signs for \u003cb\u003eCalvi\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCargese\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCarghjese\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePiana\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow D81\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cf``G_qbt@U|ACN?Je@`B{@rDe@hBa@jB]zAe@rBYtAEPENK`@IXELCLEVEXCHKd@[pAGXSv@[vAERSv@[tASx@UbAADU`AGZQl@U~@ERGVMl@M`@Qt@On@AFMb@AFOj@ETCPAN@NBN@HFLXp@HLDFJJNFL@`@AN?RDVNr@bANNLLNFNBN@N@H@RD`@Lf@R\\RPNRPRTTXZd@JHLLLFB@ZD`@HZHXJTNZJ^RPLVHF@L@T?TCPAR?H?F@RBTBTD`@HF@ZD^Dj@Ff@JLD@?PF@?RLXVRXP\\Jb@LfA?H?P?VCZG^EX?\\@^DRJTBDHJTP`@VRNTPLLFJLRHPDR@F@HLbAFb@Fj@PdAHd@LXJXJPJNLRLLLLPNNHNHNF\\N@?`@PRHj@VdAd@XLXLd@Rf@TNFRNPNHJDDNNLPJRNZJ\\F^F^BN@LFr@@XAXCVEHCDKLCBKH]VULKFKJGPEJCPCVAd@Cd@AFEf@Gj@Or@Qf@Wf@S^EF[l@i@fAS^_@t@]l@[l@Yz@GPKj@G`@Ot@ObASvAc@nCEVM~@QfAGf@Af@?h@?VBVPx@DRJRTf@JRZn@l@nAZp@LXLZHXH\\Hf@Ff@@b@?dACfAC`ACd@Ab@Ap@?h@?`@@b@Dl@Db@Hl@Fd@Hb@Lt@TdAH^BJZtAFXX~@@BJ^J^BLBP@V?PCREPGNINOLQNGBy@d@KJUVIHGJIRETEVAZAVCL?HEPCJGLINMLEDSLC@YPSJMHSJMFMJOJKHYXQPABKLOLWTULUHWHWHSJQLMPGLELEREZMp@Ml@Mt@G\\IRQLQDO?OCMESASBMDQLOZI`@G^EXGVITOXGDCFQLSJSFSBW@WFWHQNMRIN]h@CFSZWd@MVu@pAABY`@q@hAg@t@a@l@"
                     },
                     "start_location" : {
                        "lat" : 42.1131355,
                        "lng" : 8.701763099999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "66 m",
                        "value" : 66
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 42.11436399999999,
                        "lng" : 8.65347
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oj``G{ays@CCGIGKEECCOKKCM?QBC@IB"
                     },
                     "start_location" : {
                        "lat" : 42.1138378,
                        "lng" : 8.6532564
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 42.11504,
                        "lng" : 8.6521536
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wm``Gecys@OfASx@CHGRUXQVQRKNQN?@"
                     },
                     "start_location" : {
                        "lat" : 42.11436399999999,
                        "lng" : 8.65347
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "uwqzG_iwh@gyBfzK}bAxpCanBnsHey@pyBo`Br_B}`BbsHuxA~lJ`qBer@n{@ruAd}CtuJhwDhhJjhBhoR|oHhsQryDzfFrgDb~BfzDptDjvE|y@d|D~eApzAs[j_CzrD|iAjaAzo@~tBnwBbM~_D{xBjjA_BxkBeHjOsP_dAwmGilAutEiyCocHviCcsGjtAo}FjqBinAnlFi_F`gCgzD{R{dNhd@q|OdjCg~HlnC}mAxjFs|@zeCkUnmEeoBthAazDlZwsEklBqvBhImeBhmBiwCr{A_kAoBoaBevAu|JzYtJja@lk@jvB{}DdyJmvKdPmsAzF|v@`tByZvaBcjAjm@eqBtqA{gDlbA{uDhpAqzBeHqcBjy@atAd~AawDvxAslDzHsuFaWgoFe~CcuL}jA{vO~RorM{h@ymHmHopKaNorG`f@q~C~cCojD`|CfHtqCewA`}CeyDjmEmbDz|@_eAnLgmCrjAyoCfaBoo@hmDc`CvgCe~@rtDxWh`FyoCj_Erv@rdB}p^|~CqiGrpAy{LntDg`PdeC}zGpuBifM|sAoaLp`EsrGj_AspCfgCqeBhzF__Cv`DpdApaIqYdxJqkEdqC{{Ab|BhIvcCkPfhIm}EdeFhb@|jEmwA|`BmlA|qBvHf_Fs|BjrCgxBxjCm_BjyC_sB`kFhe@hbF?jbD~[lcCmaAtzAzOdgBdQjjAio@piBg_DlpBiZveCwoAbh@wzBbqBuWl|Bot@|c@|qAaQ|uA|q@{Rlg@qkBbhAh`@ngDjhMjiA~{EnrAja@n\\f}AjZ`_Ff}AhuCn_DdmJrhDroFfk@lp@~r@{B~^nV~pAknA{HZgEDi_@ye@pbaA}qkAlzr@ut{@njQ}jPbu^{zS`m~@clh@|qaAaUv|InwF}b@pkLmP|a@g\\pI}BcBuWcKkHnIvFEbd@rGbbA|XvfFfk@tkIvLtbDcLtgBqzBvaC|f@jVdkAxyAlw@uv@nmB~PpzAjd@ng@lq@hzBgOxyCho@llGtkDjiEpi@pxFwLrwB`w@jt@`pAtw@bzBqk@dzCz}@rtAnoA_MviApc@hNfb@|vArUv}D|Zx~Bra@`dEpfB`wBtsA|kCp_AbuGruD~oGzzBzaE`Idc@gYzFgc@s^}d@jQkBbwBn]w{@vA~|@`Zdm@ld@[|p@b`BW`zAbXtSfUb\\uSdx@`uArhAbu@wwBpfAgmAnp@z~BrpBpeAjyFr~Dfc@~hBvB|tAti@~B~GltCzw@jkBbbCxoArk@lPoGzaAjw@nbA{v@dbD"
         },
         "summary" : "A1",
         "warnings" : [],
         "waypoint_order" : [ 0 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
