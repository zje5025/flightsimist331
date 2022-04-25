let flights = [
    {
        "aircraftId": "JIA5336",
        "altitude": 31000,
        "aircraftType": "CRJ9",
        "groundspeed": 491,
        "flightroute":"ROCKT1 AHTIY JST BOJID2",
        "arrivalCode": "A",
        "origin": {
            "name": "CVG",
            "lat": 39.0508,
            "long": -84.6673
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "RPA4818",
        "altitude": 33000,
        "aircraftType": "E75L",
        "groundspeed": 497,
        "flightroute":"POMCT OWEBO HLG JST BOJID2",
        "arrivalCode": "A",
        "origin": {
            "name": "CMH",
            "lat": 39.9999,
            "long": -82.8872
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "AAL2764",
        "altitude": 38000,
        "aircraftType": "A319",
        "groundspeed": 513,
        "flightroute":"SSOXS6 SSOXS BUZRD SEY HTO RIFLE Q439 SARDI Q439 BRIGS JIIMS3",
        "arrivalCode": "A",
        "origin": {
            "name": "BOS",
            "lat": 42.3656	,
            "long": -71.0096
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "LXJ549",
        "altitude": 43000,
        "aircraftType": "CL30",
        "groundspeed": 543,
        "flightroute":" JST BOJID2",
        "arrivalCode": "A",
        "origin": {
            "name": "PIT",
            "lat": 40.4919,
            "long": -80.2352
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "PDT6209",
        "altitude": 29000,
        "aircraftType": "E145",
        "groundspeed": 516,
        "flightroute":" ISO J121 SWL JIIMS3",
        "arrivalCode": "A",
        "origin": {
            "name": "ILM",
            "lat": 34.2670	,
            "long": -77.9105
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "AAL2562",
        "altitude": 32000,
        "aircraftType": "A319",
        "groundspeed": 533,
        "flightroute":"MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR MEEOW FEWWW SEEVR4 ",
        "arrivalCode": "D",
        "origin": {
            "name": "PHL",
            "lat": 39.87286813352552	,
            "long": -75.24370693806067
        },
        "destination": {
            "name": "DFW",
            "lat": 32.8998,
            "long": -97.0403
        }
    },
    {
        "aircraftId": "RPA4514",
        "altitude": 22000,
        "aircraftType": "E75L",
        "groundspeed": 356,
        "flightroute":" MXE PENSY J110 VINSE DEMME4",
        "arrivalCode": "D",
        "origin": {
            "name": "PHL",
            "lat": 39.87286813352552	,
            "long": -75.24370693806067
        },
        "destination": {
            "name": "PIT",
            "lat": 40.4919,
            "long": -80.2352
        }
    },
    {
        "aircraftId": "RPA5625",
        "altitude": 174000,
        "aircraftType": "E75L",
        "groundspeed": 438,
        "flightroute":"DITCH Q437 HNNAH Q450 JFK ROBUC3",
        "arrivalCode": "D",
        "origin": {
            "name": "PHL",
            "lat": 39.87286813352552	,
            "long": -75.24370693806067
        },
        "destination": {
            "name": "BOS",
            "lat": 42.3656,
            "long": -71.0096
        }
    },
    {
        "aircraftId": "N350WC",
        "altitude": 32000,
        "aircraftType": "C560",
        "groundspeed": 420,
        "flightroute":"OOD TEBEE HAYDO TRPOD TAQLE1",
        "arrivalCode": "D",
        "origin": {
            "name": "PHL",
            "lat": 39.87286813352552	,
            "long": -75.24370693806067
        },
        "destination": {
            "name": "RDU",
            "lat": 35.8801,
            "long": -78.7880
        }
    },
    {
        "aircraftId": "AAL805",
        "altitude": 34000,
        "aircraftType": "A321",
        "groundspeed": 459,
        "flightroute":"STOEN Q75 ENEME EVANZ Q109 KNOST M219 NAVVL L465 SHARQ UM463 WALKY UB879 CUN",
        "arrivalCode": "D",
        "origin": {
            "name": "PHL",
            "lat": 39.87286813352552	,
            "long": -75.24370693806067
        },
        "destination": {
            "name": "CUN",
            "lat": 21.0417,
            "long": -86.8740
        }
    },
    {
        "aircraftId": "PDT6180",
        "altitude": 15000,
        "aircraftType": "E145",
        "groundspeed": 444,
        "flightroute":"HAR BOJID2",
        "arrivalCode": "E",
        "origin": {
            "name": "UNV",
            "lat": 40.8514,
            "long": -77.8528
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "N246JP",
        "altitude": 5400,
        "aircraftType": "S22T",
        "groundspeed": 197,
        "flightroute":"BAL V214 ODESA OOD ",
        "arrivalCode": "E",
        "origin": {
            "name": "FME",
            "lat": 39.0879,
            "long": -76.7593
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "ASH6345",
        "altitude": 4400,
        "aircraftType": "E75L",
        "groundspeed": 321,
        "flightroute":"MMUGS4 GUSTI Q22 BEARI FAK PAATS3",
        "arrivalCode": "E",
        "origin": {
            "name": "IAH",
            "lat": 29.9902,
            "long": -95.3368
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "AAL551",
        "altitude": 6200,
        "aircraftType": "A321",
        "groundspeed": 308,
        "flightroute":"FOLZZ1 ALYRA PELCN AR18 DIW WETRO CEBEE SWL JIIMS3",
        "arrivalCode": "E",
        "origin": {
            "name": "MIA",
            "lat": 25.7959,
            "long": -80.2871
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    },
    {
        "aircraftId": "PDT6137",
        "altitude": 19000,
        "aircraftType": "E145",
        "groundspeed": 479,
        "flightroute":"SCHOL DUNFE J121 SWL JIIMS3",
        "arrivalCode": "E",
        "origin": {
            "name": "ORF",
            "lat": 36.8957,
            "long": -76.2000
        },
        "destination": {
            "name": "PHL",
            "lat": 39.87286813352552,
            "long": -75.24370693806067
        }
    }
];  