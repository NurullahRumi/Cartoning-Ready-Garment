/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCr1100pk0GetSht700detResponsePoutPshpDet implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("SHPNUM")
    private String shpnum;

    @ColumnAlias("PSHPNUM")
    private String pshpnum;

    @ColumnAlias("DELDAT")
    private LocalDateTime deldat;

    @ColumnAlias("INVOICENO")
    private String invoiceno;

    @ColumnAlias("FINLCN")
    private String finlcn;

    @ColumnAlias("PSHPMOD")
    private String pshpmod;

    @ColumnAlias("STATUS")
    private String status;

    @ColumnAlias("FINDAT")
    private LocalDateTime findat;

    @ColumnAlias("PQTYORD")
    private Integer pqtyord;

    @ColumnAlias("W_CLICOD")
    private String wclicod;

    @ColumnAlias("W_SSHPDAT")
    private LocalDateTime wsshpdat;

    @ColumnAlias("W_PCKUNT")
    private Byte wpckunt;

    @ColumnAlias("PCKUNITDESC")
    private String pckunitdesc;

    @ColumnAlias("W_CLIONUM")
    private String wclionum;

    @ColumnAlias("W_GRSWGT")
    private BigDecimal wgrswgt;

    @ColumnAlias("W_NETWGT")
    private BigDecimal wnetwgt;

    @ColumnAlias("W_TOTVOL")
    private BigDecimal wtotvol;

    @ColumnAlias("W_TOTCTNS")
    private BigDecimal wtotctns;

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public String getShpnum() {
        return this.shpnum;
    }

    public void setShpnum(String shpnum) {
        this.shpnum = shpnum;
    }

    public String getPshpnum() {
        return this.pshpnum;
    }

    public void setPshpnum(String pshpnum) {
        this.pshpnum = pshpnum;
    }

    public LocalDateTime getDeldat() {
        return this.deldat;
    }

    public void setDeldat(LocalDateTime deldat) {
        this.deldat = deldat;
    }

    public String getInvoiceno() {
        return this.invoiceno;
    }

    public void setInvoiceno(String invoiceno) {
        this.invoiceno = invoiceno;
    }

    public String getFinlcn() {
        return this.finlcn;
    }

    public void setFinlcn(String finlcn) {
        this.finlcn = finlcn;
    }

    public String getPshpmod() {
        return this.pshpmod;
    }

    public void setPshpmod(String pshpmod) {
        this.pshpmod = pshpmod;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getFindat() {
        return this.findat;
    }

    public void setFindat(LocalDateTime findat) {
        this.findat = findat;
    }

    public Integer getPqtyord() {
        return this.pqtyord;
    }

    public void setPqtyord(Integer pqtyord) {
        this.pqtyord = pqtyord;
    }

    public String getWclicod() {
        return this.wclicod;
    }

    public void setWclicod(String wclicod) {
        this.wclicod = wclicod;
    }

    public LocalDateTime getWsshpdat() {
        return this.wsshpdat;
    }

    public void setWsshpdat(LocalDateTime wsshpdat) {
        this.wsshpdat = wsshpdat;
    }

    public Byte getWpckunt() {
        return this.wpckunt;
    }

    public void setWpckunt(Byte wpckunt) {
        this.wpckunt = wpckunt;
    }

    public String getPckunitdesc() {
        return this.pckunitdesc;
    }

    public void setPckunitdesc(String pckunitdesc) {
        this.pckunitdesc = pckunitdesc;
    }

    public String getWclionum() {
        return this.wclionum;
    }

    public void setWclionum(String wclionum) {
        this.wclionum = wclionum;
    }

    public BigDecimal getWgrswgt() {
        return this.wgrswgt;
    }

    public void setWgrswgt(BigDecimal wgrswgt) {
        this.wgrswgt = wgrswgt;
    }

    public BigDecimal getWnetwgt() {
        return this.wnetwgt;
    }

    public void setWnetwgt(BigDecimal wnetwgt) {
        this.wnetwgt = wnetwgt;
    }

    public BigDecimal getWtotvol() {
        return this.wtotvol;
    }

    public void setWtotvol(BigDecimal wtotvol) {
        this.wtotvol = wtotvol;
    }

    public BigDecimal getWtotctns() {
        return this.wtotctns;
    }

    public void setWtotctns(BigDecimal wtotctns) {
        this.wtotctns = wtotctns;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCr1100pk0GetSht700detResponsePoutPshpDet)) return false;
        final ProcCr1100pk0GetSht700detResponsePoutPshpDet procCr1100pk0getSht700detResponsePoutPshpDet = (ProcCr1100pk0GetSht700detResponsePoutPshpDet) o;
        return Objects.equals(getOrdnum(), procCr1100pk0getSht700detResponsePoutPshpDet.getOrdnum()) &&
                Objects.equals(getShpnum(), procCr1100pk0getSht700detResponsePoutPshpDet.getShpnum()) &&
                Objects.equals(getPshpnum(), procCr1100pk0getSht700detResponsePoutPshpDet.getPshpnum()) &&
                Objects.equals(getDeldat(), procCr1100pk0getSht700detResponsePoutPshpDet.getDeldat()) &&
                Objects.equals(getInvoiceno(), procCr1100pk0getSht700detResponsePoutPshpDet.getInvoiceno()) &&
                Objects.equals(getFinlcn(), procCr1100pk0getSht700detResponsePoutPshpDet.getFinlcn()) &&
                Objects.equals(getPshpmod(), procCr1100pk0getSht700detResponsePoutPshpDet.getPshpmod()) &&
                Objects.equals(getStatus(), procCr1100pk0getSht700detResponsePoutPshpDet.getStatus()) &&
                Objects.equals(getFindat(), procCr1100pk0getSht700detResponsePoutPshpDet.getFindat()) &&
                Objects.equals(getPqtyord(), procCr1100pk0getSht700detResponsePoutPshpDet.getPqtyord()) &&
                Objects.equals(getWclicod(), procCr1100pk0getSht700detResponsePoutPshpDet.getWclicod()) &&
                Objects.equals(getWsshpdat(), procCr1100pk0getSht700detResponsePoutPshpDet.getWsshpdat()) &&
                Objects.equals(getWpckunt(), procCr1100pk0getSht700detResponsePoutPshpDet.getWpckunt()) &&
                Objects.equals(getPckunitdesc(), procCr1100pk0getSht700detResponsePoutPshpDet.getPckunitdesc()) &&
                Objects.equals(getWclionum(), procCr1100pk0getSht700detResponsePoutPshpDet.getWclionum()) &&
                Objects.equals(getWgrswgt(), procCr1100pk0getSht700detResponsePoutPshpDet.getWgrswgt()) &&
                Objects.equals(getWnetwgt(), procCr1100pk0getSht700detResponsePoutPshpDet.getWnetwgt()) &&
                Objects.equals(getWtotvol(), procCr1100pk0getSht700detResponsePoutPshpDet.getWtotvol()) &&
                Objects.equals(getWtotctns(), procCr1100pk0getSht700detResponsePoutPshpDet.getWtotctns());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getShpnum(),
                getPshpnum(),
                getDeldat(),
                getInvoiceno(),
                getFinlcn(),
                getPshpmod(),
                getStatus(),
                getFindat(),
                getPqtyord(),
                getWclicod(),
                getWsshpdat(),
                getWpckunt(),
                getPckunitdesc(),
                getWclionum(),
                getWgrswgt(),
                getWnetwgt(),
                getWtotvol(),
                getWtotctns());
    }
}