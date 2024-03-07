SELECT
    date = GetDate()
WHERE
    EXISTS(
        SELECT
            1
        FROM
            WIKED_MT_PL..TRSYSTEM
        WHERE
            HerstellerSystem = N'WIKED'
    )
SELECT
    *
FROM
    WIKED_MT_PL..MGRUPPEN
WHERE
    MGruppe = 2628
SELECT
    *
FROM
    WIKED_MT_PL..USERGROUPSITES
WHERE
    usergroup = 2628
SELECT
    date = GetDate()
WHERE
    EXISTS(
        SELECT
            1
        FROM
            WIKED_MT_PL..MGRUPPEN
        WHERE
            Mgruppe = 2628
    )
SELECT
    Bezeichnung1
FROM
    WIKED_MT_PL..MITARBFUNKTION
WHERE
    FunktionsId = N'0'
SELECT
    Bezeichnung2
FROM
    WIKED_MT_PL..MITARBFUNKTION
WHERE
    FunktionsId = N'0'
SELECT
    *
FROM
    WIKED_MT_PL..TRSYSTEM
WHERE
    [HERSTELLERSYSTEM] = ?
ORDER BY
    HERSTELLERSYSTEM DB - PARAM 50748 Parameter [[HERSTELLERSYSTEM]]=[WIKED]
SELECT
    *
FROM
    WIKED_MT_PL..MITARB
WHERE
    [MITARBEITER_NR] = ?
ORDER BY
    MITARBEITER_NR DB - PARAM 50748 Parameter [[MITARBEITER_NR]]=[5346121.000000]
SELECT
    *
FROM
    WIKED_MT_PL..RECHTSET
ORDER BY
    RechteSetId
SELECT
    *
FROM
    WIKED_MT_PL..RSETZUOR
WHERE
    RechteSetId IN (0)
ORDER BY
    RechteSetId,
    RechteId
SELECT
    *
FROM
    WIKED_MT_PL..MITARB
WHERE
    [MITARBEITER_NR] = ?
ORDER BY
    MITARBEITER_NR DB - PARAM 50748 Parameter [[MITARBEITER_NR]]=[5346121.000000] Transaktionsbeginn: aktuelle Datenbankverbindung ist bereits in Transaktion.Es wird neue DB - Verbindung geöffnet.
SELECT
    Object_ID(N'CASYSTBL') BeginTrans
SELECT
    *
FROM
    WIKED_MT_PL..NUMSRV (TABLOCKX)
SELECT
    *
FROM
    WIKED_MT_PL..NUMSRV
WHERE
    [CODE] = ?
    AND [SUBCODE] = ?
ORDER BY
    CODE,
    SUBCODE DB - PARAM 50748 Parameter [[CODE]]=[561] DB - PARAM 50748 Parameter [[SUBCODE]]=[0]
UPDATE
    WIKED_MT_PL..NUMSRV
SET
    [CODE] = ?,
    [SUBCODE] = ?,
    [BEZEICHNUNG] = ?,
    [WERT] = ?,
    [MINWERT] = ?,
    [MAXWERT] = ?,
    [BERECHTIGUNG] = ?,
    [LETZTERZUGRIFF] = ?,
    [POOLVERWALTUNG] = ?
WHERE
    [CODE] = ?
    AND [SUBCODE] = ? DB - PARAM 50748 Parameter S [CODE] = [561] DB - PARAM 50748 Parameter S [SUBCODE] = [0] DB - PARAM 50748 Parameter A [BEZEICHNUNG] = [ID für Mehrsprachigkeit] DB - PARAM 50748 Parameter N [WERT] = [100170313.000000] DB - PARAM 50748 Parameter N [MINWERT] = [100000000.000000] DB - PARAM 50748 Parameter N [MAXWERT] = [199999999.000000] DB - PARAM 50748 Parameter S [BERECHTIGUNG] = [0] DB - PARAM 50748 Parameter T [LETZTERZUGRIFF] = [19.10.2023 09:20:27] DB - PARAM 50748 Parameter A [POOLVERWALTUNG] = [N] DB - PARAM 50748 Parameter S [CODE] = [561] DB - PARAM 50748 Parameter S [SUBCODE] = [0] EndTrans
INSERT INTO
    WIKED_MT_PL..SPRSTAMM
VALUES
(100170313, 'D', '', '', '', '', 'MITARB', 2)
INSERT INTO
    WIKED_MT_PL..SPRSTAMM
VALUES
(100170313, 'E', '', '', '', '', 'MITARB', 2)
INSERT INTO
    WIKED_MT_PL..SPRSTAMM
VALUES
(100170313, 'FR', '', '', '', '', 'MITARB', 2)
INSERT INTO
    WIKED_MT_PL..Sprstamm
VALUES
(
        100170313,
        'PL',
        N'gspztman',
        N'',
        N'',
        N'',
        'MITARB',
        0
    )
INSERT INTO
    WIKED_MT_PL..SPRSTAMM
VALUES
(100170313, 'UKR', '', '', '', '', 'MITARB', 2)
INSERT INTO
    WIKED_MT_PL..MITARB (
        [MITARBEITER_NR],
        [NAME],
        [VORNAME],
        [ANREDE],
        [STRASSE],
        [PLZ],
        [ORT],
        [COUNTRY],
        [TELEFON],
        [FUNKTION1],
        [FUNKTION2],
        [USERNAME],
        [PASSWORT],
        [RECHTE],
        [VORBELEGNAME],
        [HERSTELLERSYSTEM],
        [STATUSSCHEMAGRUPPE],
        [EMAIL],
        [ADMIN],
        [MGRUPPE],
        [SPRACHID],
        [FREMDSCHLUESSEL],
        [DBUSERNAME],
        [DBPASSWORT],
        [RECHTESETID],
        [EMAILUSER],
        [FAXNR],
        [MOBILNR],
        [STATUS],
        [ALTERNATIVMGRUPPEN],
        [FUNKTION],
        [DOMAENE],
        [AZSTART],
        [AZENDE],
        [FUNKTIONSID],
        [ANZEIGESPRACHE],
        [STANDARDVM],
        [LETZTEAENDERUNGPW],
        [MULTITR
ADEADMIN],
        [FEHLANMELDUNG],
        [CHANGEPASSWORDTOKEN],
        [CHANGEPASSWORDTOKENDATE],
        [REGISTRATIONTOKEN],
        [REGISTRATIONTOKENDATE],
        [EMAILPASSWORT]
    )
VALUES
    (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    ) DB - PARAM 50748 Parameter N [MITARBEITER_NR] = [5346121.000000] DB - PARAM 50748 Parameter A [NAME] = [2628-GRU-3] DB - PARAM 50748 Parameter A [VORNAME] = [] DB - PARAM 50748 Parameter A [ANREDE] = [] DB - PARAM 50748 Parameter A [STRASSE] = [] DB - PARAM 50748 Parameter A [PLZ] = [] DB - PARAM 50748 Parameter A [ORT] = [] DB - PARAM 50748 Parameter A [TELEFON] = [] DB - PARAM 50748 Parameter A [FUNKTION1] = [gspztman] DB - PARAM 50748 Parameter A [FUNKTION2] = [] DB - PARAM 50748 Parameter A [USERNAME] = [2628-GRU-3] DB - PARAM 50748 Parameter A [PASSWORT] = [gspztman] DB - PARAM 50748 Parameter A [HERSTELLERSYSTEM] = [WIKED] DB - PARAM 50748 Parameter A [RECHTE] = [] DB - PARAM 50748 Parameter A [VORBELEGNAME] = [] DB - PARAM 50748 Parameter S [STATUSSCHEMAGRUPPE] = [0] DB - PARAM 50748 Parameter A [EMAIL] = [wloclawek1@grupaexpert.com.pl] DB - PARAM 50748 Parameter A [ADMIN] = [N] DB - PARAM 50748 Parameter S [MGRUPPE] = [2628] DB - PARAM 50748 Parameter N [SPRACHID] = [100170313.000000] DB - PARAM 50748 Parameter A [FREMDSCHLUESSEL] = [] DB - PARAM 50748 Parameter A [DBUSERNAME] = [SUPERVISOR] DB - PARAM 50748 Parameter A [DBPASSWORT] = [AHM=] DB - PARAM 50748 Parameter S [RECHTESETID] = [0] DB - PARAM 50748 Parameter A [EMAILUSER] = [] DB - PARAM 50748 Parameter A [EMAILPASSWORT] = [] DB - PARAM 50748 Parameter A [FAXNR] = [] DB - PARAM 50748 Parameter A [MOBILNR] = [] DB - PARAM 50748 Parameter S [STATUS] = [1] DB - PARAM 50748 Parameter A [ALTERNATIVMGRUPPEN] = [] DB - PARAM 50748 Parameter S [FUNKTION] = [0] DB - PARAM 50748 Parameter A [DOMAENE] = [] DB - PARAM 50748 Parameter A [AZSTART] = [07:00] DB - PARAM 50748 Parameter A [AZENDE] = [18:00] DB - PARAM 50748 Parameter S [FUNKTIONSID] = [0] DB - PARAM 50748 Parameter A [ANZEIGESPRACHE] = [] DB - PARAM 50748 Parameter S [STANDARDVM] = [0] DB - PARAM 50748 Parameter T [LETZTEAENDERUNGPW] = [19.10.2023 09:20:13] DB - PARAM 50748 Parameter S [MULTITRADEADMIN] = [0] DB - PARAM 50748 Parameter S [FEHLANMELDUNG] = [17] DB - PARAM 50748 Parameter A [CHANGEPASSWORDTOKEN] = [06846388-e472-4363-bfcf-0203ef0c07f2] DB - PARAM 50748 Parameter T [CHANGEPASSWORDTOKENDATE] = [12.07.2023 10:59:15] DB - PARAM 50748 Parameter A [COUNTRY] = [] DB - PARAM 50748 Parameter A [REGISTRATIONTOKEN] = [] DB - PARAM 50748 Parameter [REGISTRATIONTOKENDATE] = [Value is NULL] BeginTrans
SELECT
    *
FROM
    WIKED_MT_PL..NUMSRV (TABLOCKX)
SELECT
    *
FROM
    WIKED_MT_PL..NUMSRV
WHERE
    [CODE] = ?
    AND [SUBCODE] = ?
ORDER BY
    CODE,
    SUBCODE DB - PARAM 50748 Parameter [[CODE]]=[500] DB - PARAM 50748 Parameter [[SUBCODE]]=[0]
UPDATE
    WIKED_MT_PL..NUMSRV
SET
    [CODE] = ?,
    [SUBCODE] = ?,
    [BEZEICHNUNG] = ?,
    [WERT] = ?,
    [MINWERT] = ?,
    [MAXWERT] = ?,
    [BERECHTIGUNG] = ?,
    [LETZTERZUGRIFF] = ?,
    [POOLVERWALTUNG] = ?
WHERE
    [CODE] = ?
    AND [SUBCODE] = ? DB - PARAM 50748 Parameter S [CODE] = [500] DB - PARAM 50748 Parameter S [SUBCODE] = [0] DB - PARAM 50748 Parameter A [BEZEICHNUNG] = [15.01.2014 10:25:43] DB - PARAM 50748 Parameter N [WERT] = [397853.000000] DB - PARAM 50748 Parameter N [MINWERT] = [0.000000] DB - PARAM 50748 Parameter N [MAXWERT] = [0.000000] DB - PARAM 50748 Parameter S [BERECHTIGUNG] = [0] DB - PARAM 50748 Parameter T [LETZTERZUGRIFF] = [19.10.2023 09:20:27] DB - PARAM 50748 Parameter A [POOLVERWALTUNG] = [N] DB - PARAM 50748 Parameter S [CODE] = [500] DB - PARAM 50748 Parameter S [SUBCODE] = [0] EndTrans