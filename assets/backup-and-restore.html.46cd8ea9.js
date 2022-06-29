import{_ as l,r,o as d,c as t,a as e,b as a,d as i,e as s}from"./app.d42591db.js";const o={},c=e("h1",{id:"polardb-pg-\u5907\u4EFD\u6062\u590D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#polardb-pg-\u5907\u4EFD\u6062\u590D","aria-hidden":"true"},"#"),i(" PolarDB PG \u5907\u4EFD\u6062\u590D")],-1),v=e("p",null,"\u672C\u6587\u5C06\u6307\u5BFC\u60A8\u5982\u4F55\u5BF9 PolarDB \u505A\u5907\u4EFD\u6062\u590D\uFF0C\u642D\u5EFA\u53EA\u8BFB\u8282\u70B9\uFF0C\u642D\u5EFA Standby \u5B9E\u4F8B\u7B49\u3002",-1),p=i("\u9996\u5148\u6211\u4EEC\u5148\u51C6\u5907\u4E00\u4E2A PolarDB \u5B9E\u4F8B\uFF0C\u5982\u4F55\u642D\u5EFA PolarDB \u53EF\u4EE5\u53C2\u8003\u6587\u6863 "),u={href:"https://apsaradb.github.io/PolarDB-for-PostgreSQL/zh/guide/db-pfs.html",target:"_blank",rel:"noopener noreferrer"},b=i("\u642D\u5EFA PolarDB"),m=s(`<p>\u6CE8\u610F\uFF1APolarDB \u662F\u57FA\u4E8E\u5171\u4EAB\u5B58\u50A8\u7684\u5B58\u7B97\u5206\u79BB\u67B6\u6784\uFF0C\u56E0\u6B64 PolarDB \u7684\u5907\u4EFD\u6062\u590D\u548C Postgres \u6709\u7740\u8BB8\u591A\u4E0D\u540C\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4ECE\u4EE5\u4E0B\u51E0\u70B9\u6765\u4ECB\u7ECD PolarDB \u7684\u5907\u4EFD\u6062\u590D\u3002</p><ol><li>PolarDB \u5907\u4EFD\u6062\u590D\u539F\u7406</li><li>PolarDB \u7684\u76EE\u5F55\u7ED3\u6784</li><li>polar_basebackup \u5907\u4EFD\u5DE5\u5177</li><li>PolarDB \u642D\u5EFA RO</li><li>PolarDB \u642D\u5EFA Standby</li><li>PolarDB \u6309\u65F6\u95F4\u70B9\u6062\u590D</li></ol><h2 id="\u5907\u4EFD\u6062\u590D\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u6062\u590D\u539F\u7406" aria-hidden="true">#</a> \u5907\u4EFD\u6062\u590D\u539F\u7406</h2><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656473213509-02fd756c-a796-47e0-af3b-cb7ce7e02751.png" alt="undefined"> PolarDB \u7684\u5907\u4EFD\u6062\u590D\u6574\u4F53\u539F\u7406\u51E0\u4E4E\u548C Postgres \u4E00\u81F4\uFF0C\u603B\u7ED3\u4E3A\u4EE5\u4E0B\u51E0\u6B65\uFF1A (1) \u6267\u884C pg_start_backup \u547D\u4EE4 (2) \u4F7F\u7528\u5404\u79CD\u65B9\u5F0F\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u590D\u5236\u3002 (3) \u6267\u884C pg_stop_backup \u547D\u4EE4</p><p>\u8FDB\u884C\u5907\u4EFD\u7684\u66F4\u7B80\u5355\u65B9\u6CD5\u662F\u4F7F\u7528 polar_basebackup \uFF0C\u4F46\u5B83\u5176\u5B9E\u662F\u5728\u5185\u90E8\u53D1\u51FA\u8FD9\u4E9B\u4F4E\u7EA7\u547D\u4EE4\uFF0C\u5E76\u4E14\u652F\u6301\u4F7F\u7528\u7F51\u7EDC\u5C06\u6587\u4EF6\u53D1\u9001\u5230\u8FDC\u7AEF\u3002</p><ul><li>pg_start_backup pg_start_backup \u51C6\u5907\u8FDB\u884C\u57FA\u672C\u5907\u4EFD\u3002\u6062\u590D\u8FC7\u7A0B\u4ECE REDO \u70B9\u5F00\u59CB\uFF0C\u56E0\u6B64 pg_start_backup \u5FC5\u987B\u6267\u884C\u68C0\u67E5\u70B9\u4EE5\u5728\u5F00\u59CB\u8FDB\u884C\u57FA\u672C\u5907\u4EFD\u65F6\u663E\u5F0F\u521B\u5EFA REDO \u70B9\u3002\u6B64\u5916\uFF0C\u5176\u68C0\u67E5\u70B9\u7684\u68C0\u67E5\u70B9\u4F4D\u7F6E\u5FC5\u987B\u4FDD\u5B58\u5728 pg_control \u4EE5\u5916\u7684\u6587\u4EF6\u4E2D\uFF0C\u56E0\u4E3A\u5728\u5907\u4EFD\u671F\u95F4\u53EF\u80FD\u4F1A\u591A\u6B21\u6267\u884C\u5E38\u89C4\u68C0\u67E5\u70B9\u3002\u56E0\u6B64 pg_start_backup \u6267\u884C\u4EE5\u4E0B\u56DB\u4E2A\u64CD\u4F5C\uFF1A</li></ul><ol><li>\u5F3A\u5236\u8FDB\u5165\u6574\u9875\u5199\u6A21\u5F0F\u3002</li><li>\u5207\u6362\u5230\u5F53\u524D\u7684 WAL \u6BB5\u6587\u4EF6\u3002</li><li>\u505A\u68C0\u67E5\u70B9\u3002</li><li>\u521B\u5EFA\u4E00\u4E2A backup_label \u6587\u4EF6\u2014\u2014\u8BE5\u6587\u4EF6\u5728\u57FA\u7840\u76EE\u5F55\u7684\u9876\u5C42\u521B\u5EFA\uFF0C\u5305\u542B\u5173\u4E8E\u57FA\u7840\u5907\u4EFD\u672C\u8EAB\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u4F8B\u5982\u8BE5\u68C0\u67E5\u70B9\u7684\u68C0\u67E5\u70B9\u4F4D\u7F6E\u3002 \u7B2C\u4E09\u548C\u7B2C\u56DB\u4E2A\u64CD\u4F5C\u662F\u8FD9\u4E2A\u547D\u4EE4\u7684\u6838\u5FC3\uFF1B\u6267\u884C\u7B2C\u4E00\u548C\u7B2C\u4E8C\u64CD\u4F5C\u4EE5\u66F4\u53EF\u9760\u5730\u6062\u590D\u6570\u636E\u5E93\u96C6\u7FA4\u3002</li></ol><ul><li>pg_stop_backup\u3002 pg_stop_backup \u6267\u884C\u4EE5\u4E0B\u4E94\u4E2A\u64CD\u4F5C\u6765\u5B8C\u6210\u5907\u4EFD\u3002</li></ul><ol><li>\u5982\u679C\u5DF2\u88AB pg_start_backup \u5F3A\u5236\u66F4\u6539\uFF0C\u5219\u91CD\u7F6E\u4E3A\u975E\u6574\u9875\u5199\u5165\u6A21\u5F0F\u3002</li><li>\u5199\u4E00\u6761\u5907\u4EFD\u7AEF\u7684 XLOG \u8BB0\u5F55\u3002</li><li>\u5207\u6362 WAL \u6BB5\u6587\u4EF6\u3002</li><li>\u521B\u5EFA\u5907\u4EFD\u5386\u53F2\u6587\u4EF6\u2014\u2014\u8BE5\u6587\u4EF6\u5305\u542B backup_label \u6587\u4EF6\u7684\u5185\u5BB9\u548C pg_stop_backup \u5DF2\u6267\u884C\u7684\u65F6\u95F4\u6233\u3002</li><li>\u5220\u9664 backup_label \u6587\u4EF6 \u2013 \u4ECE\u57FA\u672C\u5907\u4EFD\u6062\u590D\u9700\u8981 backup_label \u6587\u4EF6\uFF0C\u4E00\u65E6\u590D\u5236\uFF0C\u5728\u539F\u59CB\u6570\u636E\u5E93\u96C6\u7FA4\u4E2D\u5C31\u4E0D\u9700\u8981\u4E86\u3002</li></ol><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><p>\u5982\u4E0A\u6240\u8FF0\uFF0CPolarDB \u5907\u4EFD\u8FC7\u7A0B\u603B\u4F53\u53EF\u4EE5\u6982\u62EC\u4E3A\u4E09\u6B65\uFF0C\u5176\u4E2D\u7B2C\u4E8C\u6B65\u662F\u4F7F\u7528\u5404\u79CD\u65B9\u5F0F\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u590D\u5236\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u60A8\u53EF\u4EE5\u5728\u7B2C\u4E8C\u6B65\u65F6\u4F7F\u7528\u5404\u79CD\u65B9\u5F0F\u5BF9 PolarDB \u6570\u636E\u96C6\u7C07\u8FDB\u884C\u590D\u5236\uFF0C\u53EF\u4EE5\u624B\u52A8\u7684 copy\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7F51\u7EDC\u5DE5\u5177\u4F20\u8F93\uFF0C\u4E5F\u53EF\u4EE5\u57FA\u4E8E\u5B58\u50A8\u8FDB\u884C\u6253\u5FEB\u7167\u3002\u56E0\u6B64\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u4E00\u4E0B PolarDB \u6570\u636E\u76EE\u5F55\u7ED3\u6784\uFF0C\u4EE5\u4FBF\u4E8E\u8FDB\u4E00\u6B65\u7406\u89E3\u5907\u4EFD\u6062\u590D\u3002 <img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656470771553-e0c32f21-2ca4-43a4-a0a8-44d8a15e7358.png" alt="undefined"> \u5982\u4E0A\u56FE\uFF0CPolarDB \u662F\u57FA\u4E8E\u5171\u4EAB\u5B58\u50A8\u7684\uFF0C\u6240\u4EE5 PolarDB \u5728\u7269\u7406\u4E0A\u6709\u4E24\u4E2A\u91CD\u8981\u7684\u6570\u636E\u76EE\u5F55\uFF0C\u5206\u522B\u5BF9\u5E94 Local Data \uFF08Local Dir\uFF09\uFF0CShared Data\uFF08Shared Dir\uFF09\u3002</p><ol><li>Local Data \uFF08Local Dir\uFF09</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>postgres=# show data_directory;
     data_directory
------------------------
 /home/postgres/primary
(1 row)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u4E0A\u8FF0\u547D\u4EE4\u5728\u6570\u636E\u5E93\u4E2D\u83B7\u53D6 Local Dir \u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u662F\u7C7B\u4F3C\u4E8E Postgres \u7684 Data \u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 base
\u2502   \u251C\u2500\u2500 1
\u2502   \u251C\u2500\u2500 13938
\u2502   \u251C\u2500\u2500 13939
\u2502   \u2514\u2500\u2500 13940
\u251C\u2500\u2500 global
\u251C\u2500\u2500 pg_commit_ts
\u251C\u2500\u2500 pg_csnlog
\u251C\u2500\u2500 pg_dynshmem
\u251C\u2500\u2500 pg_log
\u251C\u2500\u2500 pg_logical
\u2502   \u251C\u2500\u2500 mappings
\u2502   \u2514\u2500\u2500 snapshots
\u251C\u2500\u2500 pg_logindex
\u251C\u2500\u2500 pg_multixact
\u2502   \u251C\u2500\u2500 members
\u2502   \u2514\u2500\u2500 offsets
\u251C\u2500\u2500 pg_notify
\u251C\u2500\u2500 pg_replslot
\u251C\u2500\u2500 pg_serial
\u251C\u2500\u2500 pg_snapshots
\u251C\u2500\u2500 pg_stat
\u251C\u2500\u2500 pg_stat_tmp
\u251C\u2500\u2500 pg_subtrans
\u251C\u2500\u2500 pg_tblspc
\u251C\u2500\u2500 pg_xact
\u251C\u2500\u2500 polar_cache_trash
\u251C\u2500\u2500 polar_fullpage
\u2514\u2500\u2500 polar_rel_size_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LocaL Dir \u76EE\u5F55\u4E2D\uFF0C\u5927\u591A\u90FD\u662F\u901A\u8FC7 initdb \u547D\u4EE4\u751F\u6210\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u968F\u7740\u6570\u636E\u5E93\u670D\u52A1\u8FD0\u884C\uFF0C\u8FD9\u91CC\u4F1A\u751F\u6210\u66F4\u591A\u7684\u672C\u5730\u6587\u4EF6\uFF0C\u5982\u4E34\u65F6\u6587\u4EF6\uFF0C\u7F13\u5B58\u6587\u4EF6\uFF0C\u914D\u7F6E\u6587\u4EF6\uFF0C\u65E5\u5FD7\u6587\u4EF6\u3002<br> \u5728\u505A\u5907\u4EFD\u65F6\uFF0CLocal Dir \u662F\u53EF\u9009\u7684\uFF0C\u7531\u4E8E Local \u6587\u4EF6\u4E0D\u6D89\u53CA\u6838\u5FC3\u7684\u6570\u636E\u6587\u4EF6\uFF0C\u56E0\u6B64\u60A8\u4E5F\u53EF\u4EE5\u4E0D\u53BB\u5907\u4EFD\u8FD9\u4E2A\u76EE\u5F55\uFF0C\u4EC5\u4EC5\u5907\u4EFD Shared Dir\uFF0C\u7136\u540E\u7528 initdb \u91CD\u65B0\u751F\u6210\u4E00\u4EFD\u65B0\u7684 Local Dir\uFF0C\u4F46\u662F\u9700\u8981\u8BB0\u4F4F\u4E4B\u524D\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982 postgresql.conf\uFF0Cpg_hba.conf \u7B49\u3002\u6CE8\u610F\u5982\u679C\u60A8\u4E0D\u80FD\u8BB0\u4F4F\u5386\u53F2\u914D\u7F6E\uFF0C\u6216\u8005\u60A8\u9700\u8981\u4FDD\u7559\u5386\u53F2\u65E5\u5FD7\uFF0C\u5EFA\u8BAE\u60A8\u5C06 Local Dir \u4E5F\u8FDB\u884C\u5907\u4EFD\uFF0C\u540C\u6837\u7684\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u76EE\u5F55\u5B8C\u5168 copy \u540E\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u6765\u642D\u5EFA RO \u6216\u8005 Standby\u3002</p><ol start="3"><li>Shared Data\uFF08Shared Dir\uFF09</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>postgres=# show polar_datadir;
     polar_datadir
-----------------------
 /nvme0n1/shared_data/
(1 row)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 base
\u2502   \u251C\u2500\u2500 1
\u2502   \u251C\u2500\u2500 16555
\u2502   \u251C\u2500\u2500 16556
\u2502   \u251C\u2500\u2500 16557
\u2502   \u2514\u2500\u2500 16558
\u251C\u2500\u2500 global
\u251C\u2500\u2500 pg_commit_ts
\u251C\u2500\u2500 pg_csnlog
\u251C\u2500\u2500 pg_logindex
\u251C\u2500\u2500 pg_multixact
\u2502   \u251C\u2500\u2500 members
\u2502   \u2514\u2500\u2500 offsets
\u251C\u2500\u2500 pg_replslot
\u251C\u2500\u2500 pg_tblspc
\u251C\u2500\u2500 pg_twophase
\u251C\u2500\u2500 pg_wal
\u2502   \u2514\u2500\u2500 archive_status
\u251C\u2500\u2500 pg_xact
\u251C\u2500\u2500 polar_dma
\u2502   \u251C\u2500\u2500 consensus_cc_log
\u2502   \u2514\u2500\u2500 consensus_log
\u251C\u2500\u2500 polar_flog
\u251C\u2500\u2500 polar_flog_index
\u251C\u2500\u2500 polar_fraindex
\u2502   \u251C\u2500\u2500 fbpoint
\u2502   \u2514\u2500\u2500 pg_xact
\u2514\u2500\u2500 polar_fullpage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shared Dir \u76EE\u5F55\u4E2D\uFF0C\u662F PolarDB \u7684\u6838\u5FC3\u6570\u636E\u6587\u4EF6\uFF0C\u5982\u8868\u6587\u4EF6\uFF0C\u7D22\u5F15\u6587\u4EF6\uFF0Cwal \u65E5\u5FD7\uFF0Cdma\uFF0Clogindex\uFF0Cflashback \u7B49\u7B49\u3002 \u8FD9\u4E9B\u6587\u4EF6\u88AB\u4E00\u4E2A RW \u548C\u591A\u4E2A RO \u5171\u4EAB\uFF0C\u5B83\u662F\u5FC5\u987B\u5907\u4EFD\u7684\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528 copy \u547D\u4EE4\uFF0C\u5B58\u50A8\u5FEB\u7167\uFF0C\u7F51\u7EDC\u4F20\u8F93\u65B9\u5F0F\u8FDB\u884C\u5907\u4EFD\uFF0C\u5982\u679C\u60A8\u6CA1\u6709\u66F4\u597D\u7684\u9009\u62E9\uFF0C\u63A8\u8350\u4F7F\u7528 polar_basebackup \u547D\u4EE4\u3002</p><h2 id="polar-basebackup-\u5907\u4EFD\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#polar-basebackup-\u5907\u4EFD\u5DE5\u5177" aria-hidden="true">#</a> polar_basebackup \u5907\u4EFD\u5DE5\u5177</h2>`,21),_=i("\u9996\u5148\u6211\u4EEC\u9700\u8981\u4ECB\u7ECD\u4E00\u4E0B\u6211\u4EEC\u7684\u5907\u4EFD\u5DE5\u5177 polar_basebackup\uFF0C\u5B83\u7531 "),g={href:"https://www.postgresql.org/docs/11/app-pgbasebackup.html",target:"_blank",rel:"noopener noreferrer"},h=i("pg_basebackup"),f=i(" \u6539\u9020\u800C\u6765\uFF0C\u4E14\u5B8C\u5168\u517C\u5BB9 pg_baseabckup\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B83\u540C\u6837\u53EF\u4EE5\u7528\u4E8E\u5BF9 Postgres \u505A\u5907\u4EFD\u6062\u590D\u3002 polar_basebackup \u5728 PolarDB \u4E8C\u8FDB\u5236\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684 bin \u76EE\u5F55\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u914D\u7F6E export \u73AF\u5883\u53D8\u91CF\u6765\u76F4\u63A5\u4F7F\u7528\u5B83\u3002"),k=s(`<div class="language-(\u82F1\u6C49\u4E92\u8BD1) ext-(\u82F1\u6C49\u4E92\u8BD1) line-numbers-mode"><pre class="language-(\u82F1\u6C49\u4E92\u8BD1)"><code>polar_basebackup takes a base backup of a running PostgreSQL server.

Usage:
  polar_basebackup [OPTION]...

Options controlling the output:
  -D, --pgdata=DIRECTORY receive base backup into directory
  -F, --format=p|t       output format (plain (default), tar)
  -r, --max-rate=RATE    maximum transfer rate to transfer data directory
                         (in kB/s, or use suffix &quot;k&quot; or &quot;M&quot;)
  -R, --write-recovery-conf
                         write recovery.conf for replication
  -T, --tablespace-mapping=OLDDIR=NEWDIR
                         relocate tablespace in OLDDIR to NEWDIR
      --waldir=WALDIR    location for the write-ahead log directory
  -X, --wal-method=none|fetch|stream
                         include required WAL files with specified method
  -z, --gzip             compress tar output
  -Z, --compress=0-9     compress tar output with given compression level

General options:
  -c, --checkpoint=fast|spread
                         set fast or spread checkpointing
  -C, --create-slot      create replication slot
  -l, --label=LABEL      set backup label
  -n, --no-clean         do not clean up after errors
  -N, --no-sync          do not wait for changes to be written safely to disk
  -P, --progress         show progress information
  -S, --slot=SLOTNAME    replication slot to use
  -v, --verbose          output verbose messages
  -V, --version          output version information, then exit
      --no-slot          prevent creation of temporary replication slot
      --no-verify-checksums
                         do not verify checksums
  -?, --help             show this help, then exit

Connection options:
  -d, --dbname=CONNSTR   connection string
  -h, --host=HOSTNAME    database server host or socket directory
  -p, --port=PORT        database server port number
  -s, --status-interval=INTERVAL
                         time between status packets sent to server (in seconds)
  -U, --username=NAME    connect as specified database user
  -w, --no-password      never prompt for password
  -W, --password         force password prompt (should happen automatically)
      --polardata=datadir  receive polar data backup into directory
      --polar_disk_home=disk_home  polar_disk_home for polar data backup
      --polar_host_id=host_id  polar_host_id for polar data backup
      --polar_storage_cluster_name=cluster_name  polar_storage_cluster_name for polar data backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=i("\u53EF\u4EE5\u770B\u5230 polar_basebackup \u7684\u5927\u591A\u53C2\u6570\u5373\u7528\u6CD5\u90FD\u548C "),y={href:"https://www.postgresql.org/docs/11/app-pgbasebackup.html",target:"_blank",rel:"noopener noreferrer"},D=i("pg_basebackup"),P=i(" \u4E00\u81F4\uFF0C\u53EA\u662F\u591A\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u53C2\u6570\uFF0C\u4E0B\u9762\u91CD\u70B9\u6765\u4ECB\u7ECD\u4E00\u4E0B\uFF1A"),B=e("ul",null,[e("li",null,"polardata \u5982\u679C\u60A8\u5907\u4EFD\u7684\u5B9E\u4F8B\u662F PolarDB \u5171\u4EAB\u5B58\u50A8\u67B6\u6784\uFF0C\u8FD9\u4E2A\u53C2\u6570\u7528\u4E8E\u6307\u5B9A PolarDB \u5171\u4EAB\u5B58\u50A8\u76EE\u5F55\uFF08Shared Dir\uFF09\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u60A8\u4E0D\u6307\u5B9A\uFF0C\u5C06\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u76EE\u5F55 polar_shared_data\uFF0C\u5E76\u4E14\u653E\u5728 Local Dir \uFF08\u5373 -D, --pgdata \u6240\u6307\u5B9A\u7684\u53C2\u6570\uFF09\u4E0B\u9762\u3002\u5982\u679C\u60A8\u5BF9 Postgres \u5907\u4EFD\u5219\u65E0\u9700\u5173\u5FC3\u4ED6\u3002"),e("li",null,"polar_disk_home \u5982\u679C\u60A8\u5907\u4EFD\u7684\u5B9E\u4F8B\u662F PolarDB \u5171\u4EAB\u5B58\u50A8\u67B6\u6784\uFF0C\u4E14\u60A8\u5E0C\u671B\u5C06 Shared Dir \u901A\u8FC7 pfs \u5199\u5165\u5171\u4EAB\u5B58\u50A8\u8BBE\u5907\uFF0C\u5219\u9700\u8981\u6307\u5B9A\u8FD9\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F pfs \u7684\u4F7F\u7528\u53C2\u6570\u3002"),e("li",null,"polar_host_id \u5982\u679C\u60A8\u5907\u4EFD\u7684\u5B9E\u4F8B\u662F PolarDB \u5171\u4EAB\u5B58\u50A8\u67B6\u6784\uFF0C\u4E14\u60A8\u5E0C\u671B\u5C06 Shared Dir \u901A\u8FC7 pfs \u5199\u5165\u5171\u4EAB\u5B58\u50A8\u8BBE\u5907\uFF0C\u5219\u9700\u8981\u6307\u5B9A\u8FD9\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F pfs \u7684\u4F7F\u7528\u53C2\u6570\u3002"),e("li",null,"polar_storage_cluster_name \u5982\u679C\u60A8\u5907\u4EFD\u7684\u5B9E\u4F8B\u662F PolarDB \u5171\u4EAB\u5B58\u50A8\u67B6\u6784\uFF0C\u4E14\u60A8\u5E0C\u671B\u5C06 Shared Dir \u901A\u8FC7 pfs \u5199\u5165\u5171\u4EAB\u5B58\u50A8\u8BBE\u5907\uFF0C\u5219\u9700\u8981\u6307\u5B9A\u8FD9\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F pfs \u7684\u4F7F\u7528\u53C2\u6570\u3002")],-1),w=e("h2",{id:"\u642D\u5EFA-ro",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u642D\u5EFA-ro","aria-hidden":"true"},"#"),i(" \u642D\u5EFA RO")],-1),L=e("p",null,"\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u6765\u642D\u5EFA RO node\u3002",-1),S=i("\u4F7F\u7528 initdb \u6765\u642D\u5EFA RO \u4E3B\u8981\u6B65\u9AA4\u662F\u4F7F\u7528 initdb \u521D\u59CB\u5316 RO \u7684 Local Dir \u76EE\u5F55\uFF0C\u7136\u540E\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u542F\u52A8\u5B9E\u4F8B\u3002\u5177\u4F53\u8BF7\u53C2\u8003"),R={href:"https://apsaradb.github.io/PolarDB-for-PostgreSQL/zh/guide/db-pfs.html#%E5%8F%AA%E8%AF%BB%E8%8A%82%E7%82%B9%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},E=i("\u53EA\u8BFB\u8282\u70B9\u90E8\u7F72"),O=e("li",null,[i("\u5907\u4EFD RW \u7684 Local Dir \u6765\u642D\u5EFA RO \u8FD9\u91CC\u662F\u5C06\u7B2C\u4E00\u79CD\u65B9\u5F0F\u7684 initdb \u521D\u59CB\u5316 RO \u7684 Local Dir \u66FF\u6362\u6210\u5907\u4EFD RW \u7684 Local Dir\u3002 \u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528 polar_basebakcup \u6765\u6F14\u793A\u3002 "),e("code",null,"polar_basebackup --host=[\u4E3B\u8282\u70B9\u6240\u5728IP] --port=5432 -D /home/postgres/replica1 -X stream --progress --write-recovery-conf -v"),e("img",{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656301721373-90677c11-9e82-4b5b-a60d-ea2e101cf81a.png",alt:"undefined"}),i(" \u5B8C\u6210 polar_basebackup \u547D\u4EE4\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230"),e("code",null,"/home/postgres/replica1"),i(" \u4E2D\u5B58\u5728\u4E00\u4E2A"),e("code",null,"polar_shared_data"),i(", \u642D\u5EFA RO \u65F6\u4E0D\u9700\u8981\u5B83\uFF0C\u5C06\u5B83\u5220\u9664"),e("code",null,"rm -rf /home/postgres/replica1/polar_shared_data"),e("img",{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656301745881-219b7540-3190-4cfe-a717-4083d579cc3a.png",alt:"undefined"}),i(" \u6253\u5F00 /home/postgres/replica1/postgresql.conf\uFF0C\u4FEE\u6539\u5982\u4E0B\u914D\u7F6E\u9879\uFF1A")],-1),A=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>port=5433
polar_hostid=2
polar_enable_shared_storage_mode=on
polar_disk_name=&#39;nvme0n1&#39;
polar_datadir=&#39;/nvme0n1/shared_data/&#39;
polar_vfs.localfs_mode=off
shared_preload_libraries=&#39;$libdir/polar_vfs,$libdir/polar_worker&#39;
polar_storage_cluster_name=&#39;disk&#39;
logging_collector=on
log_line_prefix=&#39;%p\\t%r\\t%u\\t%m\\t&#39;
log_directory=&#39;pg_log&#39;
listen_addresses=&#39;*&#39;
max_connections=1000
synchronous_standby_names=&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/home/postgres/replica1/recovery.conf\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u914D\u7F6E\u9879\u66FF\u6362\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>polar_replica=&#39;on&#39;
recovery_target_timeline=&#39;latest&#39;
primary_slot_name=&#39;replica1&#39;
primary_conninfo=&#39;host=[\u4E3B\u8282\u70B9\u6240\u5728IP] port=5432 user=postgres dbname=postgres application_name=replica1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u542F\u52A8\u53EA\u8BFB\u8282\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$HOME/tmp_basedir_polardb_pg_1100_bld/bin/pg_ctl start -D $HOME/replica1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5\u53EA\u8BFB\u8282\u70B9\u80FD\u5426\u6B63\u5E38\u8FD0\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$HOME/tmp_basedir_polardb_pg_1100_bld/bin/psql \\
    -p 5433 \\
    -d postgres \\
    -c &#39;select version();&#39;
            version
--------------------------------
 PostgreSQL 11.9 (POLARDB 11.9)
(1 row)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u642D\u5EFA-standby" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA-standby" aria-hidden="true">#</a> \u642D\u5EFA Standby</h2><p>\u60A8\u53EF\u4EE5\u4F7F\u7528\u5168\u91CF\u5907\u4EFD\u96C6\u642D\u5EFA Standby\uFF0C\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528 polar_basebackup \u8FDB\u884C\u642D\u5EFA\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u642D\u5EFA\u6D41\u7A0B\u3002</p><ol><li>\u4F7F\u7528 polar_basebakcup \u5BF9\u5B9E\u4F8B\u4F5C\u5168\u91CF\u5907\u4EFD</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>polar_basebackup --host=[\u4E3B\u8282\u70B9\u6240\u5728IP] --port=5432 -D /home/postgres/standby --polardata=/nvme0n2/shared_data/  --polar_storage_cluster_name=disk --polar_disk_name=nvme0n2  --polar_host_id=3 -X stream --progress --write-recovery-conf -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),I=e("img",{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656315576998-2aaeff3e-4341-46df-bce1-eb211ea4c605.png",alt:"undefined"},null,-1),q=i(" \u6CE8\u610F\uFF1A\u8FD9\u91CC\u662F\u6784\u5EFA\u5171\u4EAB\u5B58\u50A8\u7684 Standby\uFF0C\u9996\u5148\u60A8\u9700\u8981\u627E\u4E00\u53F0\u673A\u5668\u90E8\u7F72\u597D\u4E86 PolarDB \u53CA\u5176\u6587\u4EF6\u7CFB\u7EDF PolarFS\uFF0C\u4E14\u5DF2\u7ECF\u642D\u5EFA\u597D\u4E86\u5171\u4EAB\u5B58\u50A8"),N=e("code",null,"nvme0n2",-1),T=i(", \u5177\u4F53\u64CD\u4F5C\u8BF7\u53C2\u8003"),M={href:"https://apsaradb.github.io/PolarDB-for-PostgreSQL/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"},W=i("\u51C6\u5907\u5757\u8BBE\u5907\u4E0E\u642D\u5EFA\u6587\u4EF6\u7CFB\u7EDF"),C=i(" \u5907\u4EFD\u5B8C\u6210\u540E\u5982\u4E0B\uFF1A "),$=e("img",{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656315627036-15320d4f-3711-4400-b094-b698edfa8caa.png",alt:"undefined"},null,-1),z=s(`<p>\u6CE8\u610F\uFF1A\u5982\u679C\u60A8\u6CA1\u6709\u5171\u4EAB\u5B58\u50A8\u8BBE\u5907\uFF0C\u5219\u60A8\u4E0D\u9700\u8981\u6307\u5B9A--polar_storage_cluster_name\uFF0C --polar_disk_name\uFF0Cpolar_host_id \u53C2\u6570\u3002\u4E0B\u9762\u6211\u4EEC\u7B80\u5355\u4ECB\u7ECD\u4E0B\u5176\u4ED6\u5F62\u6001\u7684 PolarDB \u5907\u4EFD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-- \u5355\u8282\u70B9\u672C\u5730\u5907\u4EFD
polar_basebackup -D /polardb/data-standby -X stream  --progress --write-recovery-conf -v
--\u5171\u4EAB\u5B58\u50A8\u672C\u5730\u5907\u4EFD
polar_basebackup -D /polardb/data-standby --polardata=/polardb/data-local  -X stream --progress --write-recovery-conf -v
-- \u5171\u4EAB\u5B58\u50A8\u5199\u5165pfs
polar_basebackup -D /polardb/data-standby --polardata=/nvme7n1/data  --polar_storage_cluster_name=disk --polar_disk_name=nvme7n1  --polar_host_id=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u68C0\u67E5\u5907\u4EFD\u662F\u5426\u6B63\u5E38\u67E5\u770B Local Dir \u4E0E Shared Dir Local Dir <img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656315747873-16bf409d-d58f-4e65-b1e0-1ae0e523b863.png" alt="undefined"> Shared Dir <img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656315649979-c0731ab7-4516-4e5e-9626-93ccdd1abab4.png" alt="undefined"></li><li>\u4FEE\u6539 postgresql.conf \u4E2D\u7684\u4E0B\u5217\u53C2\u6570\u503C\u5982\u4E0B\u6240\u793A\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>polar_hostid = 3
polar_disk_name = &#39;nvme0n2&#39;
polar_datadir = &#39;/nvme0n2/shared_data&#39;
polar_storage_cluster_name = &#39;disk&#39;
synchronous_standby_names=&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u5728\u4E3B\u5E93\u4E2D\u521B\u5EFA\u590D\u5236\u69FD</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>psql --host=[\u4E3B\u8282\u70B9\u6240\u5728IP]  --port=5432 -d postgres -c &#39;SELECT * FROM pg_create_physical_replication_slot(&#39;standby1&#39;);&#39;
 slot_name | lsn
-----------+-----
 standby1  |
(1 row)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u5728 Standby \u7684 Local Dir \u4E2D recovery.conf \u6587\u4EF6\u4E2D\u589E\u52A0\u5982\u4E0B\u53C2\u6570</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>recovery_target_timeline = &#39;latest&#39;
primary_slot_name = &#39;standby1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u542F\u52A8 Standby</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> $HOME/tmp_basedir_polardb_pg_1100_bld/bin/pg_ctl start -D $HOME/standby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>\u9A8C\u8BC1 Standby</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>psql --host=[master\u6240\u5728IP] --port=5432 -d postgres -c &quot;create table t(t1 int primary key, t2 int);insert into t values (1, 1),(2, 3),(3, 3);&quot;
CREATE TABLE
INSERT 0 3

psql --host=[standby\u6240\u5728IP] --port=5432 -d postgres -c &#39; select * from t;&#39;
t1 | t2
----+----
 1 |  1
 2 |  3
 3 |  3
(3 rows)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6309\u65F6\u95F4\u70B9\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u6309\u65F6\u95F4\u70B9\u6062\u590D" aria-hidden="true">#</a> \u6309\u65F6\u95F4\u70B9\u6062\u590D</h2>`,13),H=i("\u53EF\u4EE5\u53C2\u8003 Postgres \u6309\u65F6\u95F4\u70B9\u6062\u590D"),V={href:"http://www.postgres.cn/docs/11/continuous-archiving.html",target:"_blank",rel:"noopener noreferrer"},X=i("PITR"),F=e("img",{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/135683/1656473229849-8b7dbf39-2830-45e1-a076-adea16c06366.png",alt:"undefined"},null,-1),Q=i(" \u5176\u539F\u7406\u5982\u56FE\u6240\u793A\uFF0C\u4F7F\u7528\u5907\u4EFD\u96C6\u52A0\u4E0A\u5F52\u6863\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u6062\u590D\u51FA\u4EFB\u610F\u5386\u53F2\u65F6\u523B\u7684 PolarDB \u5B9E\u4F8B\u3002");function G(U,Y){const n=r("ExternalLinkIcon");return d(),t("div",null,[c,v,e("p",null,[p,e("a",u,[b,a(n)])]),m,e("p",null,[_,e("a",g,[h,a(n)]),f]),k,e("p",null,[x,e("a",y,[D,a(n)]),P]),B,w,L,e("ol",null,[e("li",null,[S,e("a",R,[E,a(n)])]),O]),A,e("p",null,[I,q,N,T,e("a",M,[W,a(n)]),C,$]),z,e("p",null,[H,e("a",V,[X,a(n)]),F,Q])])}var j=l(o,[["render",G],["__file","backup-and-restore.html.vue"]]);export{j as default};
