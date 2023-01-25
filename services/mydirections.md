# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json
  ?destination=44.341%2C-78.743
  &origin=43.957%2C-78.977
  &waypoints=44.239%2C-78.887|44.269%2C-78.798
  &units=imperial
  &avoid=tolls
  &traffic_model=optimistic
  &language=french
  &mode=bicycling
  &departure_time=now
  &key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJofneDN8Y1YkRCNITZPLxrVE",
         "types" : [ "premise" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJYTp-GYRu1YkRtIpFDoHN9sU",
         "types" : [ "street_address" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJz-YJQk9w1YkRzPcRzy6y9wA",
         "types" : [ "route" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJV647NWN51YkRB3YVJA9Zse4",
         "types" : [ "premise" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.3409766,
               "lng" : -78.74285189999999
            },
            "southwest" : {
               "lat" : 43.9572705,
               "lng" : -78.9954712
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "24.0 mi",
                  "value" : 38640
               },
               "duration" : {
                  "text" : "2 hours 4 mins",
                  "value" : 7447
               },
               "end_address" : "543 Ramsey Rd, Little Britain, ON K0M 2C0, Canada",
               "end_location" : {
                  "lat" : 44.2398568,
                  "lng" : -78.8873595
               },
               "start_address" : "59 Charest Pl, Whitby, ON L1M 2B2, Canada",
               "start_location" : {
                  "lat" : 43.9572705,
                  "lng" : -78.9758028
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "3.3 mi",
                        "value" : 5240
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1205
                     },
                     "end_location" : {
                        "lat" : 44.0022095,
                        "lng" : -78.9954712
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eAshburn Rd\u003c/b\u003e toward \u003cb\u003eHolsted Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}khkGv}_aNgCz@uHfCa@LiDjAgBj@GBiH~Ba@NqGtB}MxEo@VoBp@gA^iCz@{Af@k@PeA\\oA`@{Af@o@TyC`Ae@NQFq@TA?[LcBh@IBc@NcBh@YJC@e@NcBj@i@Pc@N[J_@LMDe@N_AZaAZyE|Ao@Tc@Li@PYJkA`@YHeA\\k@Ry@Vq@TaF`BgCz@ODu@TeBl@sFhB_@JkA`@k@Zm@^u@b@a@PuBt@oBl@a@LcBj@e@L_@LcA\\C?eCx@A?_@LgBj@A?[JC@MDWHeBl@UHGBC@UHc@LIDiCz@UHGB_@LA@e@Ny@Va@LGBgBj@YJGBYHKDUHsBn@UHYJG@GBC@]LiBn@UFA@sC|@WHKBUHoBn@iBj@}DnAuFfB[HQFODc@NeBh@GB_AXc@Nu@V}@ZQF_AZG@_A\\s@Ta@NgBj@"
                     },
                     "start_location" : {
                        "lat" : 43.9572705,
                        "lng" : -78.9758028
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 mi",
                        "value" : 2472
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 477
                     },
                     "end_location" : {
                        "lat" : 44.008822,
                        "lng" : -78.9659625
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMyrtle Rd W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Regional Rd 5\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ydqkGtxcaNIo@c@qC?CAGIq@G][iCo@yES_BOkAEWCQ?AE[M}@?CIo@COKw@a@mCu@mF[}BIe@CSa@sC_BeLKq@Ku@Gi@U}AU_BGa@M}@_@uCs@gFU_B_@mCOeA[wBoB{Mg@uDqAsJM{@i@}DeAaIaAkHk@_E]mCWgBMaAIo@"
                     },
                     "start_location" : {
                        "lat" : 44.0022095,
                        "lng" : -78.9954712
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.9 mi",
                        "value" : 7868
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1515
                     },
                     "end_location" : {
                        "lat" : 44.0771805,
                        "lng" : -78.982539
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-12 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-7\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cnrkGf`~`N_B^gBj@qAf@wAh@a@PA?cErAaF|Aw@V[JoBn@}Af@_AXwBp@UHgCx@e@Na@NIBe@Ni@N?@YHOBG?I@I?I@IA_@AOCOEc@KGAa@Ig@MiAWQEQEQC[CQAMA]@aA?[@sC@E@cAAg@?A?M?_@C]AUAGAIAa@CEA}@MOCIAC?iAOa@GG?WEQCe@EQA]AIA[AO?S?g@?S?_@@wCFw@BA?eBDg@@uABk@@i@@oCDG?gBDC?m@@c@?mAA_AAmACy@Ci@A[ACASASAo@GEAw@Ik@GaBUi@GiBUwAOqAQC?oAQk@Is@I[EgIcAeEk@s@IQCA?oBWIAsASy@KGAcBQKCi@EGA{@ISAWC[?UAc@?q@?g@DU@[DQBg@FgATQDi@PmCx@UHa@Lw@VuC~@KDiGpBcBj@mBl@y@X[JkBl@[JqA`@UHyE|A{@Xi@P[Jk@Rm@RWHUHUJQJYL_@Re@VUN[RSPWPo@f@m@f@y@r@c@^[V_@Z_@X[T]TWPQJOHMHk@XaAb@aA\\e@N}@X}Ad@WHC@]J_AXuDjA]JkA^aAZm@PwAb@aAXi@NiErAC@ODwC~@E@GBsBn@MD]JoBl@iBl@cBf@_AZ]JE@C@_@JQDi@Je@Js@J{@LkANc@H_@F[FSDODo@Pw@Tq@Tm@P]LC@kBj@o@RyC`Aa@LeErAGBa@Lo@RyBr@C@mEtAsAb@kA^E@yAd@QFe@NQF_AXgA^aAZE@u@V]L[JkA`@i@Lc@L]JQBE?g@JI@"
                     },
                     "start_location" : {
                        "lat" : 44.008822,
                        "lng" : -78.9659625
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 mi",
                        "value" : 2901
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 506
                     },
                     "end_location" : {
                        "lat" : 44.0970851,
                        "lng" : -78.9593124
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eON-7A E\u003c/b\u003e (signs for \u003cb\u003ePort Perry\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ky_lGzgaaNIK?AA??AM?GAI?QAKAOAQCICMEQGYMCEUWIMw@aAc@g@m@w@GIu@cAo@w@q@_Ao@y@cAsAKM{DcFw@cACCi@q@ACiAwAs@_AEG_BsBuAgB}@kAk@u@u@aAqCoDY_@cDeEW_@kAyAo@{@aAoAAA[_@eCaD[a@[a@MO{@gAgAuA{@gAg@o@u@_AGIw@cAQSu@aAgCaDmBcCOSaBsBeC_DKOmBaCm@w@W]k@s@s@}@s@_AOQk@u@k@q@OSaAoAOQGGeBwBGIQWe@m@m@y@y@_AYa@_@e@"
                     },
                     "start_location" : {
                        "lat" : 44.0771805,
                        "lng" : -78.982539
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 377
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 123
                     },
                     "end_location" : {
                        "lat" : 44.0993802,
                        "lng" : -78.9558775
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eQueen St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "yuclGtv|`Nk@q@SUSWa@i@}AsBAAsAoBYk@Uk@oBeF"
                     },
                     "start_location" : {
                        "lat" : 44.0970851,
                        "lng" : -78.9593124
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 mi",
                        "value" : 2791
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 468
                     },
                     "end_location" : {
                        "lat" : 44.1244374,
                        "lng" : -78.957909
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOld Simcoe Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cddlGfa|`NgAB_BBc@@sDJkBDu@BQ?kBDc@D{AHa@BiBJwCHM@iEJu@D{@DeBJ}@Bm@@{ADQ@_BDK@c@@gADa@Bm@BmDPM@y@Dc@BO?S@M?_@@kCJuCLmEPwHTgELmDJmAFkBHgADmCLgAFyEN{FXmAH]?kBBa@@kFR"
                     },
                     "start_location" : {
                        "lat" : 44.0993802,
                        "lng" : -78.9558775
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "433 ft",
                        "value" : 132
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 44.1247634,
                        "lng" : -78.9563211
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eScugog Line 8\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w`ilG|m|`N]oCa@mD"
                     },
                     "start_location" : {
                        "lat" : 44.1244374,
                        "lng" : -78.957909
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.0 mi",
                        "value" : 11279
                     },
                     "duration" : {
                        "text" : "36 mins",
                        "value" : 2133
                     },
                     "end_location" : {
                        "lat" : 44.2243361,
                        "lng" : -78.95395359999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSimcoe St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Regional Rd 2\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Simcoe St\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wbilG~c|`NuCpAQFc@J_D|@M@m@H_B@G?sBOSC}JkBiCe@iWeEmCe@iBYuKgBaC_@gB_@QEGA_@G_IkAc@GeAQmCa@gAQMASEOCmCa@c@GyAUc@GSE]Ec@IiBYSCOCSEMCSCOCw@MeAQOCc@Ga@Gc@IIASCKCiEo@C?{Do@yCe@GCc@GmASeAU}@Uu@MiIuBoB]ICwIuAmCc@wB_@eEo@gAQa@GgAQa@GkBYeAQc@GWEICc@GmCc@c@Ga@GOCAAyASa@GcJqAwFy@iBWCA_@Ec@IuFw@gLeBc@I_C]u@MG?WAyF]qAIy@@qBB}@@G?]@_HFE?gABkB@]@oBBc@?kBB]@i@?oCDK?W?c@@o@@kEDsIJkEDgGMUAo@GqD_@]GUE]G_BYiAQuCg@y@KKA}@Ko@G}LuAMA{@Kc@GC?cAMwAQqEg@c@EOAqBM[?c@?W?K?c@?[?sBRA?a@HsAR}Bl@ODQHa@P_@Na@Pa@POFqAh@oAf@s@Tu@VGBG@a@Jc@Ha@HKBG@s@Hc@FI@I?O@a@Bc@Bc@@c@Bc@Bc@Bc@@c@BgAFc@@c@Bc@Bc@BgADU@W@o@DoBLgAFgAFc@B_@Bu@BcE`@{DVq@DwAFeAB_In@iDt@a@LSFuA\\c@LSFOD_@NkDrAoCbAyAh@C?iA`@aA\\C@]JC@cCz@C@cBj@e@P]JC@_A^cA^cA^C@]Le@P]LkDnAA@gDnAC@]LUHKDC?]JgBh@C?a@LgBp@QFq@VgBn@OFA@ODeAZ{DhAUFo@PUHm@PWF"
                     },
                     "start_location" : {
                        "lat" : 44.1247634,
                        "lng" : -78.9563211
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 mi",
                        "value" : 5580
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1003
                     },
                     "end_location" : {
                        "lat" : 44.2398568,
                        "lng" : -78.8873595
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRamsey Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 28\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cq|lGdu{`Ne@uC_@eCKm@?AsAkIKm@c@oCAKeBgLUuA?AU_BiBqLm@}Dk@uD?Cc@sCIi@Ik@iCyPAEYmB]_CIi@?Ea@sCU{AIi@AEKq@e@cDuB{OEa@O}@U_BIo@U}AKo@Ko@_@oCKo@k@}DKo@k@}DKo@gDkUIo@EWw@gGKo@S_BIo@_@oCIo@CUEY?AU}AKo@_@oCUuAU_BKo@k@}DyA}JKo@cA}Ga@mCYoB[_CyCgTIe@c@kCi@_DE]qAyJWeBo@}DU_BKm@W_BIo@aBqKEYa@mCwE}\\mB_OIo@qA_KG_@"
                     },
                     "start_location" : {
                        "lat" : 44.2243361,
                        "lng" : -78.95395359999999
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "5.5 mi",
                  "value" : 8817
               },
               "duration" : {
                  "text" : "26 mins",
                  "value" : 1575
               },
               "end_address" : "1313-1233 Zion Rd, Little Britain, ON K0M 2C0, Canada",
               "end_location" : {
                  "lat" : 44.272322,
                  "lng" : -78.8036489
               },
               "start_address" : "543 Ramsey Rd, Little Britain, ON K0M 2C0, Canada",
               "start_location" : {
                  "lat" : 44.2398568,
                  "lng" : -78.8873595
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 527
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 44.2412206,
                        "lng" : -78.88102590000001
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eRamsey Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 28\u003c/b\u003e toward \u003cb\u003eBeacroft Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cr_mG~tn`NoGqf@"
                     },
                     "start_location" : {
                        "lat" : 44.2398568,
                        "lng" : -78.8873595
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 mi",
                        "value" : 1381
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 244
                     },
                     "end_location" : {
                        "lat" : 44.2530884,
                        "lng" : -78.88612839999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBeacroft Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sz_mGlmm`NeA\\a@LeA\\cA\\mEvAsGtBkDjAkDhAcAZa@Na@LgBj@kDjAkDhAmCz@cCx@eAZmEvAkDhA"
                     },
                     "start_location" : {
                        "lat" : 44.2412206,
                        "lng" : -78.88102590000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.3 mi",
                        "value" : 6909
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1237
                     },
                     "end_location" : {
                        "lat" : 44.272322,
                        "lng" : -78.8036489
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eZion Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eConcession Rd 3\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ydbmGhmn`NoB}MkAmIW_Bk@}DyCsSc@wCo@}DoAkISkA}B_P_F{\\w@mFS{Ac@sCw@mFqB{MW_Bw@mFEYOwAi@mDqB{MW}AKo@[yBOcAaA_HKo@U_BU}AIo@OcAIi@a@mCU_BIo@{A}JCS}AyK_@oCU_BKw@c@yDKcAS{@yByNE]kG}b@_@oCa@oCiCoR_@oCQiACSa@oCmAmIIo@eC}PKo@Io@Ig@Ku@aBoLmAmIIo@u@oFKo@Io@Ko@Io@U_BIo@ESIo@Km@Io@Ko@Io@mAmIKo@Io@Ko@Io@Ko@Io@U_Ba@mCKo@_@oCU_BU_BKm@U_BU_Bg@qDGUGKCE"
                     },
                     "start_location" : {
                        "lat" : 44.2530884,
                        "lng" : -78.88612839999999
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "8.8 mi",
                  "value" : 14114
               },
               "duration" : {
                  "text" : "44 mins",
                  "value" : 2668
               },
               "end_address" : "Field House, Lindsay, ON K9V 3H7, Canada",
               "end_location" : {
                  "lat" : 44.3409766,
                  "lng" : -78.74294119999999
               },
               "start_address" : "1313-1233 Zion Rd, Little Britain, ON K0M 2C0, Canada",
               "start_location" : {
                  "lat" : 44.272322,
                  "lng" : -78.8036489
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 822
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 178
                     },
                     "end_location" : {
                        "lat" : 44.27000400000001,
                        "lng" : -78.81344369999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eZion Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eConcession Rd 3\u003c/b\u003e toward \u003cb\u003eValentia Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_}emGxi~_NBDFJFTf@pDT~AT~AJl@T~AT~A^nCJn@`@lCT~AHn@Jn@Hn@Jn@Hn@Jn@lAlIHn@Jn@Hn@Jl@Hn@DR"
                     },
                     "start_location" : {
                        "lat" : 44.272322,
                        "lng" : -78.8036489
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 mi",
                        "value" : 2895
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 479
                     },
                     "end_location" : {
                        "lat" : 44.29432750000001,
                        "lng" : -78.8249795
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eValentia Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "onemG~f``NiC|@a@La@NQDs@Va@LMFSFiCx@qGtBeAZa@NC?_AZc@Na@LSHMBYJG@s@PqBb@IBQDODC?oGtB}Af@oBn@a@Na@LkDjAiCz@kDjAwAd@gH`CgC|@c@La@NeBj@a@N[JEBA?a@LGBcDdAa@LuHbCa@La@La@Nc@L_AXeBf@mBj@a@LgBh@gBh@a@La@LmDdAa@La@LmBj@YJOJQNMz@Mr@Qn@A@Qj@Sf@Wf@"
                     },
                     "start_location" : {
                        "lat" : 44.27000400000001,
                        "lng" : -78.81344369999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 mi",
                        "value" : 4453
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 803
                     },
                     "end_location" : {
                        "lat" : 44.3141348,
                        "lng" : -78.78890819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLittle Britain Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 4\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qfjmGbob`N{Au@a@O]IA?s@Gu@Ci@@a@Ds@NsAb@a@LkDhAa@NcAZaNnEa@NoFfBc@NaB\\E@WDK@QB[?]@]?A?WAUC{@KyC_AQMqA}@IKg@g@kA_Bi@_A]{@O_@AEOa@U{@Ia@[}AIo@uBoOU}AIo@eD{USsA_@oC_@oCQeA{BgP}@kGg@sDk@}DIo@Ko@Io@Ko@Io@Ko@Io@{@kGWwBIeAEkAEoAUuIA{@Ci@Eq@Gw@MeAk@}DKo@}E{\\Io@a@oCa@oC_@mCKo@a@oCk@_EIm@{@cG"
                     },
                     "start_location" : {
                        "lat" : 44.29432750000001,
                        "lng" : -78.8249795
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 mi",
                        "value" : 1245
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 275
                     },
                     "end_location" : {
                        "lat" : 44.3247941,
                        "lng" : -78.7936771
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eElm Tree Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 18\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ibnmGtm{_NeA^a@Na@LcA^a@NkE~AeA^[JuDlA]LqGxBa@La@NcA\\{KvDUFm@Tc@LgC|@cA\\c@LgC|@kA`@"
                     },
                     "start_location" : {
                        "lat" : 44.3141348,
                        "lng" : -78.78890819999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 mi",
                        "value" : 4265
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 869
                     },
                     "end_location" : {
                        "lat" : 44.3404458,
                        "lng" : -78.7460974
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}dpmGnk|_NGk@Is@S}AAEIg@Ko@Io@m@_Ea@mCIo@[uBQiAU_BIm@uAmJe@_D_@oCKo@a@oCKo@Im@Ko@Io@Ko@U_BIo@U_Ba@oCKm@_@oCKo@Io@Ic@m@kEU}Aa@oCa@oCk@}DQgA[wBIo@a@oCKm@_@oCKo@M{@Gc@U_Bk@}DKo@a@oCk@_EKo@k@}DIo@sAcJq@yEaA_Ha@mCU_BKo@Io@U_BKo@Ig@?GKo@Km@U_BKo@Io@a@oCKm@Ky@SuAKw@e@eCAGWmA[sAKQEEEEEIEMMc@o@cBc@_ACGQ_@Ug@Ue@Ug@gA{B_BcDWg@Ue@c@}@IOUe@Wg@Ue@Ug@We@CGa@w@_@q@Ua@m@gA[c@MOw@kAIIi@o@s@s@a@a@w@q@_As@}@k@CAa@Y]Wq@q@KMUSWS"
                     },
                     "start_location" : {
                        "lat" : 44.3247941,
                        "lng" : -78.7936771
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "397 ft",
                        "value" : 121
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 44.33983569999999,
                        "lng" : -78.7452042
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yfsmGbbs_NHWBCBCB@DANENGFATIBADADEDIDO?ICSE]AG?GBCJE"
                     },
                     "start_location" : {
                        "lat" : 44.3404458,
                        "lng" : -78.7460974
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 220
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 44.340417,
                        "lng" : -78.74285189999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eAuk Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "_csmGn|r_NLCBC@C?C?AIm@E]AO?I@I@GEWAOAGCGEAGCCECECKUkB?G?C?EGECCCECIAKCICOCOCKCIEGKI"
                     },
                     "start_location" : {
                        "lat" : 44.33983569999999,
                        "lng" : -78.7452042
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "128 ft",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 44.3405716,
                        "lng" : -78.7432979
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sfsmGxmr_NGVEROl@"
                     },
                     "start_location" : {
                        "lat" : 44.340417,
                        "lng" : -78.74285189999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "177 ft",
                        "value" : 54
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 44.3409766,
                        "lng" : -78.74294119999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qgsmGrpr_NGMiAy@"
                     },
                     "start_location" : {
                        "lat" : 44.3405716,
                        "lng" : -78.7432979
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "}khkGv}_aNea@|MoVnI_DhAyItCePlFqHbCg[fKqRlGoLxDwB|@cBbAiHbCmFdBuH`C{OlFoPrFca@hMqJ`DuAd@gBj@Io@c@uCKy@gBaNYwBeCqQwJ_s@{DgXqDcXqE{\\e@iDIo@_B^yDrAyBz@_NhE_QrFwBr@sA^e@BiAMuFmAyAEwFDmBAaBGuC]kC]gBMiACsFHcOXaDF_GGcCI}AMgOgBad@{FaCSmBEkCLsCf@sUrHwOdFcNpEaBx@kBlAoHbGcBhAkCpA}J~CsQrFi]rKaCh@_Fr@_BZgEnAgQvFcQrFsJ|C{DrA}Bj@m@JI@IKAAMAo@Ey@Ok@UY]sCoD{MeQi\\sb@ku@g`AuGiI{GoIuEoGo@wAoBeFgABcCD_HPwEN}BLaGTiIXoMb@aMj@q`@rAoLb@kT~@yFNkFR]oCa@mDuCpAu@RmD~@m@H_B@{BOqKoBs[kFoWgEaDo@wPgCiLeBaPgCuQsCuFgA_KcCyBa@cXiEsEs@mMqBux@sLkJi@qFFiTT{LN_PPkEDgGMeAIoEg@}Ey@oEs@iAMwPkBcEg@uFm@aCOcB?_A?uBRuB\\mCr@uB|@sEjByBr@sBb@iE^cI\\aKh@sEVyFd@mF\\}CJ_In@iDt@u@TyBj@oFpBwHnCyJhDkG|BqMzEuCz@_DfAkDpAgHrBkCt@qAiIaGw_@qGsb@eGma@_Fa^{C{SiFi^}AoL_BoLmH_g@qFe`@}AoJiB_NeA}GoCoQmJer@sJau@k`@jMyYpJsGrBkDhAoB}McBmLeEqYwDmViLex@eF}\\}@gGy@eGqDcVsBsNwEw[wC}So@qF_@_CkLex@}Ey]cHgf@}Gcf@uFo`@qD{V}@qGOa@CEBDN`@~A~KvA~JxBlOlB|MT|ADRiC|@cA\\eA\\mEvAwOdFaGvA}u@~ViQxF_MtDsR|Fi@VQNMz@_@bBSl@k@nA}BeA_@IiBKkAFgCr@sHbCwWvIkCf@iBDkBQkDmA{AiAsBgCgA{Bw@cCe@_C_C_QyE}\\mEm[gEmZiBcNOqC[eLSoEcHof@qEk[{@cGeA^cA\\wJnDe`@tMkPtFg@cEmAgIuFy_@_H{e@{ZqvBoB}Mw@uF{AoH]g@cAuCcH}NuDwH}AwCmB}CaAuA}AcByAsA}B_Be@[oAiAa@a@WSHWFGH?|@YTSDYIq@AONIPG@GQ}AAs@CWIIKIGQU}BSYMu@GUQQMj@Ol@GMiAy@"
         },
         "summary" : "Simcoe St",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : [ 0, 1 ]
      }
   ],
   "status" : "OK"
}
```
## Additional Comments
1. This routes my path from home (not exact) to school 
2. The origin, waypoints, and destination are where I see different birds on my way to school
3. Origin - Brooklin, ON
    The Dark Eyed Junco - https://www.allaboutbirds.org/guide/Dark-eyed_Junco
4. Waypoint 1 - A tree, and the seemingly prefered perch of a red tailed hawk - https://www.google.com/maps/@44.2397627,-78.8872173,3a,75y,357.19h,90.41t/data=!3m6!1e1!3m4!1sj-d7ND_jFmRkDPKjz1jRtA!2e0!7i16384!8i8192
    The Red Tailed Hawk - https://www.allaboutbirds.org/guide/Red-tailed_Hawk/id
5. Waypoint 2 - A hobby farm - https://www.google.com/maps/place/311+Valentia+Rd,+Little+Britain,+ON+K0M+2C0/@44.2609415,-78.8094385,3a,75y,257.93h,89.43t/data=!3m6!1e1!3m4!1sgt9ao22I3wyDovYpchXG4g!2e0!7i16384!8i8192!4m5!3m4!1s0x89d571b3823740e1:0x687ae6e131c24116!8m2!3d44.2608223!4d-78.8095223
    The American Pekins - https://www.birds-of-north-america.net/Pekin_Duck.html
6. Destination - Fleming College Frost Campus
    The American Crow - https://www.allaboutbirds.org/guide/American_Crow/overview#
____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
