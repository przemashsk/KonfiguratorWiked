SELECT
  ARTNR,
  PREISFELDNR,
  FLOOR(WERT) WERT,
  BEZEICHNUNG1,
  BEZEICHNUNG2
FROM
  ART A
  LEFT JOIN ARTPREISE B ON A.ARTIKELID = B.ARTIKELID
  AND B.PREISFELDNR IN (111, 112)
  AND B.PREISSCHEMAID in(36, 37, 95)
WHERE
  ARTKLCODE = 6011
  AND PRODUKTTYP <> '99'
order by
  1,
  2 FOR json path